import React from "react";
import { motion } from "framer-motion";
import { AppContext } from "../contextAPI/AppContext";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// 🎨 Priority color config
const priorityStyles = {
  High: "bg-red-50 border-red-400 text-red-500 bg-red-100",
  Medium: "bg-yellow-50 border-yellow-400 text-yellow-500 bg-yellow-100",
  Low: "bg-blue-50 border-blue-400 text-blue-500 bg-blue-100",
};

const Improvements = () => {
  const { data } = React.useContext(AppContext);

  return (
    <motion.div
      variants={cardVariant}
      className="bg-white p-5 rounded-xl shadow lg:col-span-2 space-y-4"
    >
      <h3 className="font-semibold">Key Improvements</h3>

      <div className="space-y-3">
        {data?.improvements?.map((item, index) => {
          const style = priorityStyles[item.priority] || priorityStyles.Low;

          return (
            <div
              key={index}
              className={`flex justify-between items-center ${style.split(" ")[0]} border-l-4 ${style.split(" ")[1]} p-4 rounded-lg`}
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full ${style.split(" ")[2]} ${style.split(" ")[3]}`}
              >
                {item.priority}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Improvements;
