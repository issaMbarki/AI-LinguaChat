import { OpenAI } from "openai";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.get("/:key", async (req, res) => {
    const key=req.params.key;
    const params= req.query;
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `${key}"` }],
        model: "gpt-3.5-turbo",
    });
    res.json(chatCompletion.choices[0].message.content)
    // res.json({...req.params,...req.query});

});

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`);
});
