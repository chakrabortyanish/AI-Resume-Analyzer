import React from "react";
import { motion } from "framer-motion";
import { AppContext } from "../contextAPI/AppContext";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Tips = () => {
  const { data } = React.useContext(AppContext);
  return (
    <motion.div
      variants={cardVariant}
      className="bg-white p-5 rounded-xl shadow w-full"
    >
      <h3 className="font-semibold mb-4">Enhancement Tips</h3>

      <ul className="text-sm font-semibold text-gray-600 space-y-4">
        {
          data.enhancementTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✔</span>
              {tip}
            </li>
          ))

        }
      </ul>
    </motion.div>
  );
};

export default Tips;
