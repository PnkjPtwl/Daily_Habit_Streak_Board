export default function HabitItem({ habit, onToggle }) {
  return (
    <label className={`habit-item ${habit.completedToday ? "completed" : ""}`}>
      <div className="habit-main">
        <input
          type="checkbox"
          checked={habit.completedToday}
          onChange={() => onToggle(habit.id)}
        />
        <div>
          <strong>{habit.name}</strong>
          <p>{habit.description}</p>
        </div>
      </div>

      <div className="habit-meta">
        <span className="tag">{habit.category}</span>
        <span className="streak-badge">{habit.streak} day streak</span>
      </div>
    </label>
  );
}
