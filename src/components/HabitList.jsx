import HabitItem from "./HabitItem";

export default function HabitList({ habits, onToggle }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="section-kicker">Checklist</p>
          <h2>Today's habits</h2>
        </div>
        <span className="pill">{habits.length} habits</span>
      </div>

      <div className="habit-list">
        {habits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} onToggle={onToggle} />
        ))}
      </div>
    </section>
  );
}
