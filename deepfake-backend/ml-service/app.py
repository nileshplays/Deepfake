# IMPORTANT: Disable GPU usage (safe for laptop)
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

from fastapi import FastAPI, UploadFile, File
import uvicorn
from model.load_model import load_model
from utils.preprocess import preprocess_image
from utils.video_utils import process_video

# Create FastAPI app
app = FastAPI(title="Deepfake Detection ML Service")

# Load ML model ONCE at startup
model = load_model()

@app.post("/predict/image")
async def predict_image(file: UploadFile = File(...)):
    """
    Receives an image from Node.js
    Preprocesses it
    Runs inference
    Returns result
    """
    image_bytes = await file.read()

    input_tensor = preprocess_image(image_bytes)
    prediction = model.predict(input_tensor)[0][0]

    result = "Fake" if prediction > 0.5 else "Real"

    return {
        "type": "image",
        "result": result,
        "confidence": round(float(prediction) * 100, 2)
    }


@app.post("/predict/video")
async def predict_video(file: UploadFile = File(...)):
    """
    Receives a video
    Extracts frames
    Aggregates predictions
    """
    temp_path = f"temp_{file.filename}"

    with open(temp_path, "wb") as f:
        f.write(await file.read())

    result, confidence = process_video(temp_path, model)

    os.remove(temp_path)

    return {
        "type": "video",
        "result": result,
        "confidence": confidence
    }


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
