import { useEffect, useState } from "react";
import HabitList from "../components/HabitList";
import StreakCounter from "../components/StreakCounter";
import WeeklySummary from "../components/WeeklySummary";
import { getHabits, toggleHabitCompletion } from "../services/api";

export default function Dashboard() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadHabits() {
      try {
        setLoading(true);
        const data = await getHabits();
        if (active) {
          setHabits(data);
          setError("");
        }
      } catch (loadError) {
        if (active) {
          setError("Unable to load your habits right now.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadHabits();

    return () => {
      active = false;
    };
  }, []);

  async function handleToggle(habitId) {
    try {
      const updatedHabits = await toggleHabitCompletion(habitId);
      setHabits(updatedHabits);
    } catch (toggleError) {
      setError("We couldn't update that habit. Please try again.");
    }
  }

  const completedToday = habits.filter((habit) => habit.completedToday).length;
  const totalStreak = habits.reduce((sum, habit) => sum + habit.streak, 0);
  const bestHabit = habits.reduce(
    (best, habit) => (habit.streak > best.streak ? habit : best),
    habits[0] ?? { name: "No habits yet", streak: 0 }
  );

  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Daily Habit Streak Board</p>
          <h1>Stay consistent, see momentum, and build your routine one day at a time.</h1>
          <p className="hero-copy">
            Track your habits, watch streaks grow, and review your week from one clean dashboard.
          </p>
        </div>
        <div className="hero-card">
          <div>
            <span className="metric-label">Completed today</span>
            <strong>{completedToday}/{habits.length || 0}</strong>
          </div>
          <div>
            <span className="metric-label">Total streak points</span>
            <strong>{totalStreak}</strong>
          </div>
          <div>
            <span className="metric-label">Best current streak</span>
            <strong>{bestHabit.name}</strong>
            <small>{bestHabit.streak} day streak</small>
          </div>
        </div>
      </section>

      {error ? <div className="status-banner error">{error}</div> : null}
      {loading ? <div className="status-banner">Loading your habits...</div> : null}

      {!loading ? (
        <section className="dashboard-grid">
          <HabitList habits={habits} onToggle={handleToggle} />
          <aside className="sidebar">
            <StreakCounter habits={habits} />
            <WeeklySummary habits={habits} />
          </aside>
        </section>
      ) : null}
    </main>
  );
}
