import api from "./api";

export async function handleUserData() {
  try {
    const response = await api.get(`/userData`);
    return response.data
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
  }
}
