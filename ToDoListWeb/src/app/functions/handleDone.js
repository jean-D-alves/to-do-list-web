import axios from "axios";

export async function handleDone(id, done, tasks, setTasks) {
  const response = await axios.patch(
    `http://localhost:5000/tasks/${id}`,
    { done: done ? 0 : 1 },
    { withCredentials: true }
  );
  if (response.status === 200) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: done ? 0 : 1 } : task
      )
    );
  }
}
