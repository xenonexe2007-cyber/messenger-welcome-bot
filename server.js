const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Messenger Welcome Bot Server is Running!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    bot: "Messenger Welcome Bot"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});