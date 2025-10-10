import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config;

export const URL = "https://jean-d-alves.github.io/to-do-list-web/";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/script", express.static(path.join(__dirname, "script")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "template")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "template", "index.html"));
});

// Sobe o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
