# 🌱 Daily Habit Streak Board – Frontend

A lightweight and intuitive habit tracking interface that helps users stay consistent with their daily routines using checkboxes, streak counters, and a weekly summary view.

---

## 📌 Overview

This frontend application provides a clean UI for users to:

* Track daily habits with simple checkboxes
* View current streaks for each habit
* Analyze weekly progress through a summary dashboard

The system is designed with modular responsibilities:

* Backend handles checklist persistence, streak logic, and summary calculations
* Frontend focuses on user interaction, visualization, and experience

---

## ✨ Features

* ✅ **Daily Habit Checklist**
  Easily mark habits as completed for the day

* 🔥 **Streak Counter Display**
  Visual representation of current streaks for motivation

* 📊 **Weekly Summary View**
  Displays habit completion trends over the week

* 🎨 **Responsive UI**
  Works smoothly across desktop and mobile devices

---

## 🧱 Tech Stack

* **Framework**: (React / Vue / Vanilla JS — update as per your project)
* **Styling**: CSS / Tailwind / Bootstrap
* **State Management**: (Context API / Redux / Local State)
* **API Integration**: REST APIs from backend

---

## 📂 Project Structure

```
frontend/
│── public/
│── src/
│   ├── components/
│   │   ├── HabitList.jsx
│   │   ├── HabitItem.jsx
│   │   ├── StreakCounter.jsx
│   │   ├── WeeklySummary.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx
│
│── package.json
│── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone <your-repo-url>
cd frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

---

## 🔗 API Integration

The frontend communicates with backend services for:

* Fetching habit list
* Updating daily completion status
* Retrieving streak data
* Loading weekly summaries

Example endpoints:

```
GET /habits
POST /habits/:id/check
GET /habits/streaks
GET /summary/weekly
```

---

## 🎯 Responsibilities (Frontend Developer)

* Build reusable UI components
* Integrate backend APIs
* Manage application state
* Ensure responsive and user-friendly design

---

## 🤝 Collaboration

This project follows a modular team approach:

* Backend Dev 1 → Checklist logic
* Backend Dev 2 → Streak & summary logic
* Frontend Dev → UI & user experience

---

## 📈 Future Improvements

* Dark mode 🌙
* Notifications & reminders ⏰
* Data visualization (charts/graphs) 📉
* User authentication 🔐

---

## 🧠 Why This Project Works

The system is divided into independent modules:

* Checklist management
* Streak computation
* Summary analytics
* UI layer

This allows parallel development and faster iteration with minimal dependency conflicts.

---

## 📜 License

This project is for learning and collaboration purposes.

---
