import api from "../functions/api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css//routes/register.css"
import ButtonLink from "../components/buttonLink";
import Form from "../components/form";
export default function Register() {
  const [username, setusername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  async function singup(e) {
    e.preventDefault();
    try {
      const response = await api.post(
        "/users",
        { name: username, email: Email, password: Password }
      );
      console.log(response.data.name, "resgister");
      navigate("/");
    } catch (error) {
      console.log("erro", error.message);
      alert("error in sign up")
    }
  }
  const userForm = [
    {
      label: "name",
      type: "text",
      name: "name",
      value: username,
      placeholder: "Enter you user name",
      set: setusername,
    },
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
      <div id="registerDiv">
        <Form func={singup} title="register" fields={userForm} />
        <ButtonLink href="/login" text="login"/>
      </div>
    </>
  );
}
