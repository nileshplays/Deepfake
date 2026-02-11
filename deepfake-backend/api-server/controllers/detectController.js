import fs from "fs";
import { callMLService } from "../services/mlService.js";

export const detectMedia = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const isVideo = file.mimetype.includes("video");

    const result = await callMLService(file.path, isVideo);

    // Remove file after processing
    fs.unlinkSync(file.path);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
