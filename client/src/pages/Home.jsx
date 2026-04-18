import Navbar from "../components/Navbar";
import ScoreCircle1 from "../components/ScoreCircle.jsx";
import Footer from "../components/Footer.jsx";

import { FaUpload, FaBrain, FaLightbulb, FaBriefcase } from "react-icons/fa";

import cv_1 from "../assets/dummy-cv/cv-1.png";
import cv_2 from "../assets/dummy-cv/cv-2.png";
import cv_3 from "../assets/dummy-cv/cv-3.png";
import cv_4 from "../assets/dummy-cv/cv-4.png";
import cv_5 from "../assets/dummy-cv/cv-5.png";
import cv_6 from "../assets/dummy-cv/cv-6.png";

export default function Home() {
  const dummyData = [
    { img: cv_6, score: 85 },
    { img: cv_1, score: 50 },
    { img: cv_2, score: 40 },
    { img: cv_3, score: 20 },
    { img: cv_4, score: 95 },
    { img: cv_5, score: 65 },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-gray-100 to-blue-100 pt-[20px] pb-[80px] p-[20px] max-md:p-[8px] max-md:pb-[60px]">
        <Navbar />

        {/* Hero Section */}
        <div className="text-center mt-12 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            AI Resume Analyzer & Job Matcher
          </h1>

           {/* how its work section */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base">
            {/* Step 1 */}
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-md hover:scale-105 transition">
              <FaUpload className="text-blue-500" />
              <span className="text-gray-700 font-medium">Upload Resume</span>
            </div>

            {/* Arrow */}
            <span className="hidden sm:block text-gray-400">→</span>

            {/* Step 2 */}
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-md hover:scale-105 transition">
              <FaBrain className="text-purple-500" />
              <span className="text-gray-700 font-medium">AI Analysis</span>
            </div>

            <span className="hidden sm:block text-gray-400">→</span>

            {/* Step 3 */}
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-md hover:scale-105 transition">
              <FaLightbulb className="text-yellow-500" />
              <span className="text-gray-700 font-medium">Suggestions</span>
            </div>

            <span className="hidden sm:block text-gray-400">→</span>

            {/* Step 4 */}
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-md hover:scale-105 transition">
              <FaBriefcase className="text-green-500" />
              <span className="text-gray-700 font-medium">Job Matches</span>
            </div>
          </div>

          {/* Cards Section */}
          <div className="mt-12 max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {dummyData.map((d, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <img
                  src={d.img}
                  alt={`CV ${i}`}
                  className="w-full h-[300px] object-fit group-hover:scale-110 transition duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Score */}
                <div className="w-[80px] absolute top-0 right-0 bg-white/20 backdrop-blur-md">
                  <ScoreCircle1 score={d.score} />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-semibold text-lg">AI Score Analysis</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
