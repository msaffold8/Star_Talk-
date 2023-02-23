import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/chatbot", async (req, res) => {
  try {
    const { input } = req.body;

    const gptResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `The following is a conversation with a ${req.query.name} chatbot.\n\nHuman: ${input}\n${req.query.name}:`,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [`${req.query.name}:`],
    });

    const response = gptResponse.data.choices[0].text
      .replace(`${req.query.name}:`, "")
      .trim();

    res.json({ response });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
