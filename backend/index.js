const express = require("express");
const app = express();


const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ message: "The API is working" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});