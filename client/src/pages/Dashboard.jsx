import React, { useState } from "react";
import { motion } from "framer-motion";
import ScoreCircle from "../components/ScoreCircle";
import UploadResume from "../components/UploadResume";
import SkillsCard from "../components/SkillsCard";
import Improvements from "../components/Improvements";
import Tips from "../components/Tips";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AppContext } from "../contextAPI/AppContext";

export default function Dashboard() {
  const { loading, setLoading, data, setData } = React.useContext(AppContext);
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pb-[80px] pt-[20px]">
        <Navbar />

        <div className="max-w-[1100px] mx-auto mt-[40px]">
          {/* 🔥 UPLOAD SCREEN */}
          {!data && !loading && <UploadResume />}

          {/* 🔄 LOADING */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-20"
            >
              <div className="animate-spin h-14 w-14 border-t-4 border-blue-500 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium">
                Analyzing your resume...
              </p>
            </motion.div>
          )}

          {/* ✅ DASHBOARD */}
          {!loading && data && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="space-y-6"
            >
              {/* 🔥 ANALYSIS CARD */}
              <motion.div
                variants={cardVariant}
                className="bg-white rounded-2xl shadow p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6"
              >
                <div>
                  <p className="text-blue-600 text-sm font-semibold mb-2">
                    ANALYSIS COMPLETE
                  </p>

                  <h2 className="text-2xl font-bold mb-3">Your Resume</h2>

                  <p className="text-gray-600 mb-4">
                    Strong profile with solid technical skills.
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      ✔ ATS Optimized
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      🎯 High Match
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div className="w-28 h-28">
                    <ScoreCircle score={data.score} />
                  </div>
                </div>
              </motion.div>

              {/* 🔥 TOP STATS */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-yellow-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Score</p>
                  <h2 className="text-xl font-bold">89/100</h2>
                  <p className="text-xs text-green-600">Excellent</p>
                </div>

                <div className="bg-blue-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Skills Found</p>
                  <h2 className="text-xl font-bold">12</h2>
                  <p className="text-xs text-blue-600">Strong Profile</p>
                </div>

                <div className="bg-green-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Job Match</p>
                  <h2 className="text-xl font-bold">95%</h2>
                  <p className="text-xs text-green-600">High Match</p>
                </div>

                <div className="bg-purple-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">ATS Status</p>
                  <h2 className="text-xl font-bold">Optimized</h2>
                  <p className="text-xs text-purple-600">Compatible</p>
                </div>
              </div>
              {/* 🔥 GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
                {/* LEFT */}
                <div className="space-y-6">
                  <SkillsCard skills={data.skills} />
                  <Tips />
                </div>

                {/* RIGHT */}
                <div className="space-y-6">
                  <Improvements />
                  <Jobs jobs={data.jobs} />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
