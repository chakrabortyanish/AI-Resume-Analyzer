import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Tips = () => {
  return (
    <motion.div
      variants={cardVariant}
      className="bg-white p-5 rounded-xl shadow w-full"
    >
      <h3 className="font-semibold mb-4">Enhancement Tips</h3>

      <ul className="text-sm font-semibold text-gray-600 space-y-4">
        <li>✔ Improve your summary section</li>
        <li>✔ Add relevant keywords</li>
        <li>✔ Optimize ATS formatting</li>
        <li>✔ Enhance work experience</li>
      </ul>
    </motion.div>
  );
};

export default Tips;
