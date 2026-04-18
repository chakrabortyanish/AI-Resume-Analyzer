import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ScoreCircle = ({ score }) => {
   const getColor = () => {
    if (score >= 80) return "#22c55e"; // green
    if (score >= 50) return "#3b82f6"; // blue
    return "#ef4444"; // red
  };

  const getLabel = () => {
    if (score < 40) return "Poor";
    if (score < 70) return "Average";
    return "Excellent";
  };

   return (
    <div className="relative group">

      {/* Glow Background */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-40  transition duration-500"
        style={{ background: getColor() }}
      ></div>

      {/* Glass Container */}
      <div className="relative backdrop-blur-md bg-white/20 rounded-full p-2 shadow-lg border border-white/30">

        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textColor: "#111",
            pathColor: getColor(),
            trailColor: "rgba(255,255,255,0.2)",
            pathTransitionDuration: 1.8,
            strokeLinecap: "round",
          })}
        />

      </div>

      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-20"></div>

    </div>
  );
};

export default ScoreCircle;
