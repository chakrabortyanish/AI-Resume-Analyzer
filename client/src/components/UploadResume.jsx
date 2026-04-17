import React, { useState } from "react";
import { uploadResume } from "../services/api";
import { motion } from "framer-motion";
import { AppContext } from "../contextAPI/AppContext";

export default function UploadResume() {
  const { setLoading, setData } = React.useContext(AppContext);

  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null); // ✅ store file

  // ✅ FILE VALIDATION
  const validateFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF and DOC/DOCX files are allowed!");
      return false;
    }
    return true;
  };

  // ✅ HANDLE FILE SET
  const handleFile = (file) => {
    if (!file) return;
    if (!validateFile(file)) return;

    setFile(file);
  };

  // ✅ INPUT CHANGE
  const handleInputChange = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };

  // ✅ DRAG EVENTS
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  // ✅ FINAL UPLOAD (BUTTON CLICK)
  const handleAnalyze = async () => {
    if (!file) return alert("Please select a file first!");

    try {
      setLoading(true);

      const data = await uploadResume(file);

      setData(data.data); // your backend returns { success, data }
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <p className="text-center text-gray-500 mb-8">
        Upload your resume for AI-powered analysis
      </p>

      <motion.div className="max-w-[450px] h-[350px] bg-white shadow-xl rounded-2xl p-8 text-center mx-auto">

        {/* 🔥 DROP AREA */}
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          className={`w-full h-full grid place-items-center border-2 border-dashed rounded-xl p-4 transition 
          ${
            dragActive
              ? "border-blue-600 bg-blue-50 scale-105"
              : "border-blue-400"
          }`}
        >
          <div>
            <p className="text-[2rem] max-sm:text-[1.5rem] mb-6 text-gray-500">
              Drag & Drop your resume
            </p>

            {/* INPUT */}
            <input
              type="file"
              onChange={handleInputChange}
              className="hidden"
              id="upload"
              accept=".pdf,.doc,.docx"
            />

            {/* BUTTON */}
            <label
              htmlFor="upload"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 font-semibold rounded-lg cursor-pointer hover:scale-105 transition shadow-lg"
            >
              Browse File
            </label>

            {/* FILE NAME */}
            {file && (
              <p className="text-sm text-green-600 mt-3 font-medium">
                {file.name}
              </p>
            )}

            <p className="text-xs text-gray-400 pt-3">
              Supported: PDF, DOC, DOCX
            </p>
          </div>
        </div>
      </motion.div>

      {/* 🔥 ANALYZE BUTTON */}
      <div className="w-full flex justify-center">
        <button
          onClick={handleAnalyze}
          className="w-full max-w-[450px] mt-4 bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
          disabled={!file}
        >
          Check Analyze
        </button>
      </div>
    </motion.div>
  );
}
