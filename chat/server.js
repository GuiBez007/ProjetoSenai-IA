import express from "express"
import cors from "cors"
import { json } from "body-parser";

import { sendQuestion } from "./chat.js";
import { history } from "./history.js"

const app = express();

app.use(express.json())
app.use(cors())

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

// GET n POST
app.get("/", (req, res) => {
    res.send(history.slice(-1))
})

app.post("/chat", async (req, res) => {
    await sendQuestion(req.body)
    res.send(history.slice(-1))
})