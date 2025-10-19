import "../css/routes/Error404.css";
import { useNavigate } from "react-router-dom";

export default function ErrorRoutes() {
  const navigate = useNavigate();

  return (
    <div id="ErrorDiv">
      <img id="Erroricon" src="Error404.svg"alt="Error 404" />
      <h1 id="ErrorH1">Oops! This page does not exist</h1>
      <h2 id="ErrorH2" onClick={() => navigate("/")}>Go to main page</h2>
    </div>
  );
}
