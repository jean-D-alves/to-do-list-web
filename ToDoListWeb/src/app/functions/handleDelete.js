import axios from "axios";

export async function handleDelete(id, setTasks) {
  try {
    await axios.delete(`http://localhost:5000/tasks/${id}`, {
      withCredentials: true,
    });
    setTasks(prev => prev.filter(task => task.id !== id));
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
  }
}
