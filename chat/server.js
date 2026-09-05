import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

import { sendQuestion } from "./chat.js";
import { history } from "./history.js";

const app = express();

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos da pasta raiz
app.use(express.static(path.join(__dirname, "..")));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.post("/chat", async (req, res) => {
    await sendQuestion(req.body);
    res.send(history.slice(-1));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});