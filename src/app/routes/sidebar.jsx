import useAuth from "../hook/useAuth.jsx";
import "../css/routes/account.css";
import Sidebar from "../components/sidebar.jsx";
import Account from "../components/account.jsx";
import Dashboard from "../components/dashbourd.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
export default function Sideba() {
  useAuth();

  const MenuItens = [
    { label: "home", href: "/" },
    { label: "new task", href: "/new-task" },
    { label: "sign Out", href: "/login" },
    { label: "account", href: "/menu/account" },
    { label: "dashbourd", href: "/menu/dashbourd" },
  ];
  const location = useLocation();
  return (
    <>
      <div className="account-container">
        <Sidebar items={MenuItens} />
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/dashbourd" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}
