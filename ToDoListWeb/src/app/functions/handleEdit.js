import axios from "axios";

export async function handleEdit(id, newTitle, newDescription, setTasks) {
  try {
    await axios.patch(
      `http://localhost:5000/tasks/${id}`,
      { title: newTitle, description: newDescription },
      { withCredentials: true }
    );

    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, title: newTitle, description: newDescription } : task
      )
    );
  } catch (error) {
    console.error("Erro ao editar tarefa:", error);
  }
}
