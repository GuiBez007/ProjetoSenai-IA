import express from "express"
import cors from "cors"
import { json } from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { sendQuestion } from "./chat.js";
import { history } from "./history.js"

const app = express();

app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


// GET n POST
app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "index.html"));
    res.sendFile(path.join(__dirname, "..", "index.html"));
})

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        timestamp: new Date().toISOString(),
        service: "ProjetoSenai-IA",
        version: "1.0.0"
    })
})

app.post("/chat", async (req, res) => {
    await sendQuestion(req.body)
    res.send(history.slice(-1))
})