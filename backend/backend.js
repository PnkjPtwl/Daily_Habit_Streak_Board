let habits = [];

function addHabit() {
  const input = document.getElementById("habitInput");
  const name = input.value.trim();

  if (!name) return;

  habits.push({
    name,
    streak: 0,
    done: false
  });

  input.value = "";
  render();
}

function toggleHabit(index) {
  habits[index].done = !habits[index].done;

  if (habits[index].done) {
    habits[index].streak++;
  }

  render();
}

function render() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";

  let completed = 0;

  habits.forEach((habit, i) => {
    if (habit.done) completed++;

    const div = document.createElement("div");
    div.className = "habit";

    div.innerHTML = `
      <input type="checkbox" ${habit.done ? "checked" : ""} 
        onchange="toggleHabit(${i})" />
      <span>${habit.name}</span>
      <span>🔥 ${habit.streak}</span>
    `;

    list.appendChild(div);
  });

  // Weekly summary
  document.getElementById("total").innerText =
    "Total Completed: " + completed;

  const percent =
    habits.length === 0 ? 0 :
    Math.round((completed / habits.length) * 100);

  document.getElementById("percentage").innerText =
    "Completion: " + percent + "%";
}