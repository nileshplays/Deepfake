# ============================================
# IMPORTANT: Disable GPU usage (safe for laptop & Render)
# ============================================
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

# ============================================
# Imports
# ============================================
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from model.load_model import load_model
from utils.preprocess import preprocess_image
from utils.video_utils import process_video

# ============================================
# Create FastAPI App
# ============================================
app = FastAPI(title="Deepfake Detection ML Service")

# ============================================
# Enable CORS (Allow requests from frontend & Node backend)
# ============================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],      # Allow all HTTP methods
    allow_headers=["*"],      # Allow all headers
)

# ============================================
# Load ML Model ONCE at startup
# ============================================
# This prevents loading model for every request
model = load_model()

# ============================================
# IMAGE PREDICTION ENDPOINT
# ============================================
@app.post("/predict/image")
async def predict_image(file: UploadFile = File(...)):
    """
    Receives image file
    Preprocesses image
    Runs model inference
    Returns prediction result
    """

    # Read image bytes
    image_bytes = await file.read()

    # Convert image to model input format
    input_tensor = preprocess_image(image_bytes)

    # Run prediction
    prediction = model.predict(input_tensor)[0][0]

    # Decide label
    result = "Fake" if prediction > 0.5 else "Real"

    return {
        "type": "image",
        "result": result,
        "confidence": round(float(prediction) * 100, 2)
    }

# ============================================
# VIDEO PREDICTION ENDPOINT
# ============================================
@app.post("/predict/video")
async def predict_video(file: UploadFile = File(...)):
    """
    Receives video file
    Saves temporarily
    Extracts frames
    Runs prediction on frames
    Aggregates result
    """

    # Temporary file path
    temp_path = f"temp_{file.filename}"

    # Save video to disk
    with open(temp_path, "wb") as f:
        f.write(await file.read())

    # Process video using model
    result, confidence = process_video(temp_path, model)

    # Remove temp file
    os.remove(temp_path)

    return {
        "type": "video",
        "result": result,
        "confidence": confidence
    }

# ============================================
# Run Server (for local & Render)
# ============================================
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)