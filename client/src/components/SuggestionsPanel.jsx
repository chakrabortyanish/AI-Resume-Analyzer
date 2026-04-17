export default function SuggestionsPanel({ tips }) {
  return (
    <div className="card">
      <h3>Suggestions</h3>
      {tips.map((t, i) => (
        <p key={i}>✔ {t}</p>
      ))}
    </div>
  )
}