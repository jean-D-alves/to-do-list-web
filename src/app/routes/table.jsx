import "../css/routes/table.css";
import useAuth from "../hook/useAuth";
import Form from "../components/form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { handleDone } from "../functions/handleDone";
import { handleEdit } from "../functions/handleEdit";
import { handleDelete } from "../functions/handleDelete";
import api from "../functions/api";

export default function Table() {
  useAuth();
  const [tasks, setTasks] = useState([]);
  const [titleTask, setTitleTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [modal, setModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    }
    loadTasks();
  }, []);

  const editForm = [
    {
      label: "title",
      type: "text",
      name: "title",
      value: titleTask,
      placeholder: "Enter new title",
      set: setTitleTask,
    },
    {
      label: "description",
      type: "text",
      name: "description",
      value: descriptionTask,
      placeholder: "Enter new description",
      set: setDescriptionTask,
    },
  ];

  return (
    <div id="main">
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              style={{
                backgroundColor: task.done ? "#9b9b9bff" : "#3a3939ff",
              }}
            >
              <td style={{ padding: "15px" }}>{task.title}</td>
              <td style={{ padding: "15px" }}>{task.description}</td>
              <td style={{ padding: "15px" }}>{task.date}</td>
              <td>
                <button
                  style={{
                    backgroundColor: task.done ? "#757575ff" : "#1a1a1a",
                  }}
                  onClick={() =>
                    handleDone(task.id, task.done, tasks, setTasks)
                  }
                >
                  <img
                    style={{ width: "20px" }}
                    src="src/app/assets/verificar.svg"
                    alt="done"
                  />
                </button>

                <button
                  style={{
                    backgroundColor: task.done ? "#757575ff" : "#1a1a1a",
                  }}
                  onClick={() => {
                    setModal(true);
                    setCurrentId(task.id);
                  }}
                >
                  <img
                    style={{ width: "20px" }}
                    src="src/app/assets/lapis.svg"
                    alt="edit"
                  />
                </button>

                <button
                  style={{
                    backgroundColor: task.done ? "#757575ff" : "#1a1a1a",
                  }}
                  onClick={() => handleDelete(task.id, setTasks)}
                >
                  <img
                    style={{ width: "20px" }}
                    src="src/app/assets/lixo.svg"
                    alt="delete"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Form
              func={(e) => {
                e.preventDefault();
                handleEdit(currentId, titleTask, descriptionTask, setTasks);
                setModal(false);
                setTitleTask("");
                setDescriptionTask("");
              }}
              fields={editForm}
            />
            <button className="close-btn" onClick={() => setModal(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
