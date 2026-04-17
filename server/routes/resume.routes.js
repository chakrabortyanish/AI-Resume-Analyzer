import express from "express";
import { uploadResume } from "../controllers/resume.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// POST /api/resume/upload
router.post("/upload", upload.single("resume"), uploadResume);

export default router;