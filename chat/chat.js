import { openai } from "./config.js"
import { history, defineRole } from "./history.js"
import { personaMatica } from "./persona.js"

export const sendQuestion = async (body) => {

    history.push( defineRole("user", body.question) )

    const response = await openai.responses.create({
        input: history,
        model: "gpt-5.6-luna",
        instructions: personaMatica
    })

    history.push( defineRole("assistant", response.output_text) )

}