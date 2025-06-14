function renderTasks(tasks) {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  let completed = 0;

  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Priority: ${task.priority}</p>
      <p>Deadline: ${task.deadline ? task.deadline.split("T")[0] : "N/A"}</p>
      <p>Status: ${task.status}</p>
      <button onclick="updateTask('${task._id}', 'Completed')">Complete</button>
      <button onclick="deleteTask('${task._id}')">Delete</button>
    `;
    if (task.status === "Completed") completed++;
    list.appendChild(div);
  });

  const percent = tasks.length
    ? Math.floor((completed / tasks.length) * 100)
    : 0;
  document.getElementById("progressBar").style.width = percent + "%";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
