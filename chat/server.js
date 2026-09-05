import express from "express"
import cors from "cors"
import { json } from "body-parser";
import dotenv from "dotenv";
dotenv.config();

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
    res.send(history.slice(-1))
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