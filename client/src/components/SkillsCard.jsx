import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsCard({ skills }) {
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
      className="bg-white p-5 rounded-xl shadow w-full"
    >
      <h3 className="font-semibold mb-3">Skills Extracted</h3>

      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
