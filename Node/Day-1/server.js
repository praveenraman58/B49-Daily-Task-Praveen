const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Praveen");
});

app.get("/home", (req, res) => {
  res.send("123");
});

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
