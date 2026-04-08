const STORAGE_KEY = "daily-habit-streak-board";

const defaultHabits = [
  {
    id: 1,
    name: "Morning Walk",
    description: "Start the day with a 20 minute walk outside.",
    category: "Health",
    streak: 8,
    completedToday: true,
    weeklyCompletion: [true, true, true, true, true, false, true],
  },
  {
    id: 2,
    name: "Read 10 Pages",
    description: "Keep reading progress moving with a small daily target.",
    category: "Learning",
    streak: 5,
    completedToday: false,
    weeklyCompletion: [true, true, false, true, true, false, false],
  },
  {
    id: 3,
    name: "Drink Water Goal",
    description: "Hit the hydration goal before the end of the day.",
    category: "Wellness",
    streak: 12,
    completedToday: true,
    weeklyCompletion: [true, true, true, true, true, true, true],
  },
  {
    id: 4,
    name: "Code Practice",
    description: "Spend focused time improving one technical skill.",
    category: "Career",
    streak: 3,
    completedToday: false,
    weeklyCompletion: [false, true, true, false, true, false, false],
  },
];

function getStoredHabits() {
  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultHabits));
    return defaultHabits;
  }

  return JSON.parse(stored);
}

function saveHabits(habits) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

function withLatency(data) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(data), 250);
  });
}

export async function getHabits() {
  return withLatency(getStoredHabits());
}

export async function toggleHabitCompletion(habitId) {
  const habits = getStoredHabits();

  const updatedHabits = habits.map((habit) => {
    if (habit.id !== habitId) {
      return habit;
    }

    const completedToday = !habit.completedToday;
    const weeklyCompletion = [...habit.weeklyCompletion];
    weeklyCompletion[weeklyCompletion.length - 1] = completedToday;

    return {
      ...habit,
      completedToday,
      streak: completedToday ? habit.streak + 1 : Math.max(habit.streak - 1, 0),
      weeklyCompletion,
    };
  });

  saveHabits(updatedHabits);
  return withLatency(updatedHabits);
}
