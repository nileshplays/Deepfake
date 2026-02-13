import tensorflow as tf

def load_model():
    """
    Loads trained deepfake model safely (Render compatible)
    """
    model = tf.keras.models.load_model(
        "model/deepfake_render_ready.h5",
        compile=False
    )
    print("✅ Real deepfake model loaded successfully")
    return model
