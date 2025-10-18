import api from "./api";

export async function handleDelete(id, setTasks) {
  try {
    await api.delete(`/tasks/${id}`);
    setTasks(prev => prev.filter(task => task.id !== id));
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
  }
}
