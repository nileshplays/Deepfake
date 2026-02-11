import tensorflow as tf

def load_model():
    """
    Loads the trained deepfake detection model (.h5)
    This runs ONCE when FastAPI starts.
    """
    model = tf.keras.models.load_model("model/deepfake_model.h5")
    print("✅ Real deepfake model loaded successfully")
    return model
