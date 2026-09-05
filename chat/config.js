import OpenAI from "openai"
import dotenv, { config } from "dotenv"
dotenv.config()

const APIKEY = process.env.apiKEY
const baseURL = process.env.baseURL

export const openai = new OpenAI({
    apiKey: APIKEY,
    baseURL: baseURL
})