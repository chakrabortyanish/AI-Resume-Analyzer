export default function ScoreDashboard({ score }) {
  return (
    <div className="card">
      <h3>Resume Score</h3>
      <div className="circle" style={{ "--score": score }}>
        {score}
      </div>
    </div>
  )
}
