import api from "./api";

export async function handleDone(id, done, tasks, setTasks) {
  const response = await api.patch(
    `/tasks/${id}`,
    { done: done ? 0 : 1 }
  );
  if (response.status === 200) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: done ? 0 : 1 } : task
      )
    );
  }
}
