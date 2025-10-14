import axios from "axios";

export async function handleDashBourd() {
  const response = await axios.get(`http://localhost:5000/dashboard`, {
    withCredentials: true,
  });
  return response.data
}
