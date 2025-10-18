import api from "./api";

export async function handleEdit(id, newTitle, newDescription, setTasks) {
  try {
    await api.patch(
      `/tasks/${id}`,
      { title: newTitle, description: newDescription }
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
