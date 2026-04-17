import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Improvements = () => {
  return (
    <motion.div
      variants={cardVariant}
      className="bg-white p-5 rounded-xl shadow lg:col-span-2 space-y-4"
    >
      <h3 className="font-semibold">Key Improvements</h3>

      {/* ITEMS */}
      <div className="space-y-3">
        <div className="flex justify-between items-center bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <div>
            <p className="font-medium">Quantify Achievements</p>
            <p className="text-sm text-gray-500">
              Add measurable results to your bullet points.
            </p>
          </div>
          <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
            High
          </span>
        </div>

        <div className="flex justify-between items-center bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div>
            <p className="font-medium">Add LinkedIn Profile</p>
            <p className="text-sm text-gray-500">Include your LinkedIn URL.</p>
          </div>
          <span className="text-xs bg-yellow-100 text-yellow-500 px-2 py-1 rounded-full">
            Medium
          </span>
        </div>

        <div className="flex justify-between items-center bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <div>
            <p className="font-medium">Expand Project Section</p>
            <p className="text-sm text-gray-500">
              Add more impactful projects.
            </p>
          </div>
          <span className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
            Low
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Improvements;
