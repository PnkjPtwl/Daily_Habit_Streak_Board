---

# 🌿 HabitFlow: Daily Streak Board

### *Consistency, visualized.*

**HabitFlow** is a sleek, lightweight interface designed to turn daily discipline into a visual journey. By combining minimalist design with powerful streak logic, it provides users with the immediate feedback loop necessary to build life-changing routines.

---

## 💎 Key Features


|                     |                                                                  |
| ------------------- | ---------------------------------------------------------------- |
| **Feature**         | **Description**                                                  |
| **Daily Checklist** | One-tap completion for your daily rituals.                       |
| **Streak Engine**   | Real-time fire icons (🔥) to visualize your momentum.            |
| **Weekly Insights** | A birds-eye view of your habits across the last 7 days.          |
| **Adaptive UI**     | A fluid experience that feels native on both mobile and desktop. |


---

## 🛠 Tech Stack

- **Core:** [React.js](https://www.google.com/search?q=https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://www.google.com/search?q=https://tailwindcss.com/)
- **Icons:** [Lucide React](https://www.google.com/search?q=https://lucide.dev/)
- **State:** React Context API
- **Networking:** Axios / Fetch API

---

## 🏗 Project Architecture

The frontend is structured for **scalability** and **separation of concerns**:

Bash

```
src/
├── 🧩 components/      # Reusable UI atoms and molecules
│   ├── HabitList/      # Parent container for daily entries
│   ├── Streak/         # Logic for fire counter visualizations
│   └── Summary/        # Charting and weekly analytics
├── 📄 pages/           # High-level route views (Dashboard)
├── ⚙️ services/        # API communication layer (Axios)
├── 🎨 styles/          # Global themes and Tailwind config
└── 🧠 hooks/           # Custom logic for habit state

```

---

## 🚀 Quick Start

### 1. Installation

Bash

```
git clone <your-repo-url>
cd habitflow-frontend
npm install

```

### 2. Configuration

Create a `.env` file in the root directory:

Code snippet

```
VITE_API_BASE_URL=http://localhost:5000/api

```

### 3. Launch

Bash

```
npm run dev

```

---

## 🔌 API Interaction Map

The frontend consumes the following micro-endpoints to ensure data persistence:

> [!NOTE]
>
> All endpoints expect a valid JWT or Session ID for user-specific data.

- `GET /habits` — Fetches the active habit list for the current user.
- `POST /habits/:id/toggle` — Marks a habit as complete/incomplete for the day.
- `GET /analytics/streaks` — Retrieves calculated streak data.
- `GET /analytics/weekly` — Returns a 7-day completion matrix.

---

## 🛤 Roadmap & Evolution

- [ ] **Dark Mode 🌙** — Intelligent theme switching.
- [ ] **Data Viz 📊** — High-performance charts using Recharts or D3.
- [ ] **Smart PWA 📱** — Offline support and "Add to Home Screen" capability.
- [ ] **Social Proof 🤝** — Shareable streak cards for social media.

---

## 👥 The Team

- **Backend (Core):** Checklist persistence & DB Architecture.
- **Backend (Logic):** Streak algorithms & Analytics computation.
- **Frontend (Lead):** UI/UX Design, State Management, and API Integration.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

*Built with ❤️ for the habit-builders.*
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
