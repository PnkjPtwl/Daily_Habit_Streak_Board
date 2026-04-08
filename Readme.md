# Daily Habit Streak Board

A responsive frontend habit tracker built with React and Vite. The app lets users check off daily habits, monitor streaks, and review weekly completion progress from a single dashboard.

## Tech stack

- React 18
- Vite 5
- Plain CSS
- Local storage based mock API layer with easy backend integration points

## Features

- Daily habit checklist with one-click completion toggles
- Streak counter cards for every habit
- Weekly summary progress bars
- Responsive dashboard layout for desktop and mobile
- Service layer that can be swapped to real REST endpoints later

## Project structure

```text
Daily_Habit_Streak_Board/
|-- index.html
|-- package.json
|-- src/
|   |-- components/
|   |   |-- HabitItem.jsx
|   |   |-- HabitList.jsx
|   |   |-- StreakCounter.jsx
|   |   `-- WeeklySummary.jsx
|   |-- pages/
|   |   `-- Dashboard.jsx
|   |-- services/
|   |   `-- api.js
|   |-- styles/
|   |   `-- global.css
|   |-- App.jsx
|   `-- main.jsx
`-- vite.config.js
```

## Getting started

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal after the dev server starts.

## API integration

The app currently uses `src/services/api.js` as a lightweight mock service backed by `localStorage`. To connect a real backend later, replace the mock implementations with calls to endpoints like:

```text
GET /habits
POST /habits/:id/check
GET /habits/streaks
GET /summary/weekly
```

## Notes

- Habit state is persisted in the browser with `localStorage`
- The final day in the weekly summary is treated as "today" for the mock interaction flow
- Styling is intentionally kept framework-free for easier customization
