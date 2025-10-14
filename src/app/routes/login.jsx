import axios from "axios";
import { useState } from "react";
import ButtonLink from "../components/buttonLink";
import "../css//routes/login.css"
import Form from "../components/form.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  async function singin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        { email: Email, password: Password },
        { withCredentials: true }
      );
      navigate("/");
    } catch (error) {
      console.error("Erro ao logar:", error.response?.data || error.message);
      alert("Email or senha not exist!");
    }
  }
  const userForm = [
    {
      label: "email",
      type: "email",
      name: "email",
      value: Email,
      placeholder: "Enter you email",
      set: setEmail,
    },
    {
      label: "password",
      type: "password",
      name: "password",
      value: Password,
      placeholder: "Enter you password",
      set: setPassword,
    },
  ];

  return (
    <>
      <div id="loginDiv">
        <Form func={singin} title="login" fields={userForm} />
        <ButtonLink href="/register" text="crete new user" />
      </div>
    </>
  );
}
