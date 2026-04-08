export default function StreakCounter({ habits }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="section-kicker">Streaks</p>
          <h2>Current momentum</h2>
        </div>
      </div>

      <div className="stack-list">
        {habits.map((habit) => (
          <article key={habit.id} className="stack-item">
            <div>
              <strong>{habit.name}</strong>
              <p>{habit.completedToday ? "Checked off today" : "Waiting for today"}</p>
            </div>
            <span className="score">{habit.streak}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
