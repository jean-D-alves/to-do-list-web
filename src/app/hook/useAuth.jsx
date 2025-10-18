import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../functions/api";

export default function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get("/check-token")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  return user;
}
