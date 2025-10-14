import { useState } from "react";
import Form from "../components/form";
import "../css/routes/newTasks.css"
import useAuth from "../hook/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewTask() {
  useAuth();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const navigate = useNavigate()
  const now = new Date();
  const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  async function newTask() {
    const response = await axios.post(
      "http://localhost:5000/tasks",
      { title: title, description: description, date: date, done: 0 },
      { withCredentials: true }
    );
    navigate("/")
  }
  const newTaskForm = [
    {
      label: "title",
      type: "text",
      name: "title",
      value: title,
      placeholder: "Enter new title",
      set: settitle,
    },
    {
      label: "description",
      type: "text",
      name: "description",
      value: description,
      placeholder: "Enter new description",
      set: setdescription,
    },
  ];
  return (
    <>
      <div id="newTasksDiv">
        <Form
          func={(e) => {
            e.preventDefault();
            newTask();
          }}
          title="new Task"
          fields={newTaskForm}
        />
      </div>
    </>
  );
}
