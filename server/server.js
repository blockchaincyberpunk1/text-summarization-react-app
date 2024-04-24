const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const port = 3000;

// Load environment variables from .env file
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// Define route for text summarization with CORS headers
app.post("/summarize", async (req, res) => {
  // Set CORS headers to allow requests from any origin
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  try {
    const { text } = req.body;
    // Make request to OpenAI API to summarize text
    // Replace 'YOUR_API_KEY' with your actual OpenAI API key
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: text,
        max_tokens: 50, // Adjust the number of tokens for the summary length
        temperature: 0.3, // Adjust temperature for creativity vs accuracy
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Using environment variable
        },
      }
    );
    const summary = response.data.choices[0].text.trim();
    res.json({ summary });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
