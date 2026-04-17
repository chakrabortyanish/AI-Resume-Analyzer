import React from "react";
import { motion } from "framer-motion";
import { AppContext } from "../contextAPI/AppContext";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Jobs = () => {
  const { data } = React.useContext(AppContext);

  // Calculate top match (optional UI improvement)
  const topMatch =
    data?.recommendedJobs?.length > 0
      ? Math.max(...data.recommendedJobs.map((job) => job.match))
      : 0;

  return (
    <motion.div
      variants={cardVariant}
      className="w-full bg-white p-5 rounded-xl shadow space-y-4"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Recommended Jobs</h3>
        <span className="text-green-600 font-semibold">
          {topMatch}%
        </span>
      </div>

      {/* Jobs List */}
      <div className="space-y-3">
        {data?.recommendedJobs?.map((job, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-3 rounded-lg"
          >
            {/* Job Title */}
            <span className="font-medium">{job.title}</span>

            {/* Right Section */}
            <div className="flex items-center gap-3 mt-2 md:mt-0">
              {/* Match */}
              <span className="text-green-500 text-sm font-semibold">
                {job.match}% match
              </span>

              {/* Apply Button */}
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-orange-600 transition"
              >
                Apply
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Fallback */}
      {!data?.recommendedJobs?.length && (
        <p className="text-gray-400 text-sm text-center">
          No job recommendations yet
        </p>
      )}
    </motion.div>
  );
};

export default Jobs;
