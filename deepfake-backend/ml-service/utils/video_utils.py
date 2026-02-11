import cv2
import numpy as np

def process_video(video_path, model):
    """
    Safely process video for deepfake detection.
    Frame-based approach with full error protection.
    """

    print("🎥 Opening video:", video_path)

    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print("❌ ERROR: Cannot open video file")
        return "Invalid video", 0.0

    predictions = []
    frame_count = 0

    MAX_FRAMES = 25        # hard limit (performance + safety)
    FRAME_INTERVAL = 10    # process every 10th frame

    try:
        while cap.isOpened() and len(predictions) < MAX_FRAMES:
            ret, frame = cap.read()

            if not ret:
                print("⚠️ No more frames or read error")
                break

            # Skip frames to reduce load
            if frame_count % FRAME_INTERVAL != 0:
                frame_count += 1
                continue

            # Validate frame
            if frame is None or frame.size == 0:
                print("⚠️ Empty frame skipped")
                frame_count += 1
                continue

            # Resize & normalize (same as training)
            frame = cv2.resize(frame, (224, 224))
            frame = frame.astype("float32") / 255.0
            frame = np.expand_dims(frame, axis=0)

            # Predict
            pred = model.predict(frame, verbose=0)[0][0]
            predictions.append(float(pred))

            print(f"✅ Frame {frame_count} → pred={pred:.3f}")

            frame_count += 1

    except Exception as e:
        print("❌ VIDEO PROCESSING ERROR:", str(e))
        cap.release()
        return "Error processing video", 0.0

    cap.release()

    if len(predictions) == 0:
        print("❌ No valid frames processed")
        return "Unsupported video", 0.0

    avg_pred = sum(predictions) / len(predictions)
    result = "Fake" if avg_pred > 0.5 else "Real"

    print(f"🎯 Video result: {result}, confidence={avg_pred*100:.2f}%")

    return result, round(avg_pred * 100, 2)