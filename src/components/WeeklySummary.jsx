const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeeklySummary({ habits }) {
  const weeklyTotals = weekdays.map((day, index) => {
    const completedCount = habits.filter((habit) => habit.weeklyCompletion[index]).length;

    return {
      day,
      completedCount,
      percentage: habits.length ? Math.round((completedCount / habits.length) * 100) : 0,
    };
  });

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="section-kicker">Weekly view</p>
          <h2>Summary dashboard</h2>
        </div>
      </div>

      <div className="summary-list">
        {weeklyTotals.map((entry) => (
          <div key={entry.day} className="summary-row">
            <div className="summary-label">
              <strong>{entry.day}</strong>
              <span>{entry.completedCount} habits complete</span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${entry.percentage}%` }} />
            </div>
            <span className="summary-percent">{entry.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
