import api from "./api";


export async function handleDashBourd() {
  const response = await api.get(`/dashboard`);
  return response.data
}
