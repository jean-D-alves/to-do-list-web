import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./routes/login.jsx";
import Header from "./components/header.jsx";
import Register from "./routes/register.jsx";
import Sideba from "./routes/sidebar.jsx";
import NewTask from "./routes/newTasks.jsx";
import Table from "./routes/table.jsx";

export default function AppContent() {
  const location = useLocation();

  const mainRoutes = ["/", "/new-task", "/menu"];

  return (
    <>
      {mainRoutes.includes(location.pathname) && <Header id="header" />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-task" element={<NewTask />} />
        <Route path="/menu/*" element={<Sideba />} />
        <Route path="/" element={<Table />} />
      </Routes>
    </>
  );
}
