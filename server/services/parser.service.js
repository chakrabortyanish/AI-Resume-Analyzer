import { PDFParse } from "pdf-parse";
import mammoth from "mammoth";

/**
 * Extract text from uploaded resume
 */
export const extractTextFromFile = async (file) => {
  if (file.mimetype === "application/pdf") {
    const parser = new PDFParse({ data: file.buffer });
    const data = await parser.getText();
    return data.text;
  }

  if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const result = await mammoth.extractRawText({
      buffer: file.buffer,
    });
    return result.value;
  }

  throw new Error("Unsupported file type");
};