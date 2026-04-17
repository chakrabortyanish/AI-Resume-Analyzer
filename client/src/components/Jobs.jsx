import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Jobs = () => {

     const data = {
    skills: ["React", "TypeScript", "Node.js", "Python", "SQL", "AWS"],
    jobs: [
      { role: "Senior Software Engineer", match: 92 },
      { role: "Full Stack Developer", match: 87 },
      { role: "Data Analyst", match: 85 },
    ],
  };

  return (
    <motion.div
      variants={cardVariant}
      className="w-full bg-white p-5 rounded-xl shadow space-y-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Recommended Jobs</h3>
        <span className="text-green-600 font-semibold">95%</span>
      </div>

      <div className="space-y-3">
        {data.jobs.map((job, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-3 rounded-lg"
          >
            <span className="font-medium">{job.role}</span>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-sm font-semibold">
                {job.match}% match
              </span>
              <button className="bg-orange-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-orange-600">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Jobs;
