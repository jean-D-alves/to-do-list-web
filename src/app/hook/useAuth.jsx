import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/check-token", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  return user;
}
