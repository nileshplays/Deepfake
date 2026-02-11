import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { detectMedia } from "../controllers/detectController.js";

const router = express.Router();

/*
 POST /api/detect
 Accepts image or video
 */
router.post("/", upload.single("file"), detectMedia);

export default router;
