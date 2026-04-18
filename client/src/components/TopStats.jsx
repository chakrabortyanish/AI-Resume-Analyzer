import React from "react";
import { motion } from "framer-motion";
import { AppContext } from "../contextAPI/AppContext";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 🔥 smooth stagger animation
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: -40 }, // 🔥 horizontal animation
  visible: { opacity: 1, x: 0 },
};

// 🎯 Helper functions
const getScoreLabel = (score) => {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Good";
  return "Needs Improvement";
};

const getMatchLabel = (match) => {
  if (match >= 85) return "High Match";
  if (match >= 70) return "Moderate Match";
  return "Low Match";
};

const getATSLabel = (ats) => {
  return ats === "Optimized" ? "Compatible" : "Needs Fix";
};

const TopStats = () => {
  const { data } = React.useContext(AppContext);

  // 🔥 Safe values (avoid crash)
  const score = data?.score || 0;
  const jobMatch = data?.jobMatch || 0;
  const ats = data?.ats || "N/A";

  // 🔥 Skills count (technical + soft)
  const skillsCount = data?.skills?.length;

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {/* 🟡 Score */}
      <motion.div
        variants={cardVariant}
        className="bg-yellow-100 p-4 rounded-xl"
      >
        <p className="text-sm text-gray-500">Score</p>
        <h2 className="text-xl font-bold">{score}/100</h2>
        <p className="text-xs text-green-600">
          {getScoreLabel(score)}
        </p>
      </motion.div>

      {/* 🔵 Skills */}
      <motion.div
        variants={cardVariant}
        className="bg-blue-100 p-4 rounded-xl"
      >
        <p className="text-sm text-gray-500">Skills Found</p>
        <h2 className="text-xl font-bold">{skillsCount}</h2>
        <p className="text-xs text-blue-600">
          {skillsCount > 0 ? "Strong Profile" : "No Skills Found"}
        </p>
      </motion.div>

      {/* 🟢 Job Match */}
      <motion.div
        variants={cardVariant}
        className="bg-green-100 p-4 rounded-xl"
      >
        <p className="text-sm text-gray-500">Job Match</p>
        <h2 className="text-xl font-bold">{jobMatch}%</h2>
        <p className="text-xs text-green-600">
          {getMatchLabel(jobMatch)}
        </p>
      </motion.div>

      {/* 🟣 ATS */}
      <motion.div
        variants={cardVariant}
        className="bg-purple-100 p-4 rounded-xl"
      >
        <p className="text-sm text-gray-500">ATS Status</p>
        <h2 className="text-xl font-bold">{ats}</h2>
        <p className="text-xs text-purple-600">
          {getATSLabel(ats)}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TopStats;