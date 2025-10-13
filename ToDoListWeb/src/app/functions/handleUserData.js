import axios from "axios";

export async function handleUserData() {
  try {
    const response = await axios.get(`http://localhost:5000/userData`, {
      withCredentials: true,
    });
    return response.data
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
  }
}
