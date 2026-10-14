
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Welcome Bot</title>
      </head>
      <body style="font-family:Arial;text-align:center;padding:40px">
        <h1>🤖 Welcome Bot Online!</h1>
        <p>Test server is running successfully.</p>
        <button onclick="testWelcome()">Test Welcome Message</button>
        <p id="result"></p>
        <script>
          async function testWelcome() {
            const response = await fetch('/test-welcome');
            const data = await response.json();
            document.getElementById('result').innerText = data.message;
          }
        </script>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "online" });
});

app.get("/test-welcome", (req, res) => {
  res.json({
    success: true,
    message: "👋 Welcome to our group! Have a great time!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Welcome Bot server is running!");
});
