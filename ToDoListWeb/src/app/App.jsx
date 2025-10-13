import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./routes";
import "./css/App.css";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
