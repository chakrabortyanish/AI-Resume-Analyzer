export default function JobMatchCard({ jobs }) {
  return (
    <div className="card">
      <h3>Job Matches</h3>
      {jobs.map((job, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <p>{job.title} ({job.match}%)</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${job.match}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}