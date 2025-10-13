import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/check-token", { withCredentials: true })
      .then(() => {})
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);
}
