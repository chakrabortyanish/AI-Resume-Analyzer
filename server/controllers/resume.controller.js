import { extractTextFromFile } from "../services/parser.service.js";
import { analyzeResume } from "../services/openai.service.js";

/**
 * Upload + Analyze Resume
 */
export const uploadResume = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // 1. Extract text
    const text = await extractTextFromFile(file);

    // 2. Send to OpenAI
    const analysis = await analyzeResume(text);

    // 3. Send response
    res.json({
      success: true,
      data: analysis,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};