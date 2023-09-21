const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

const DB_URL =
  "mongodb+srv://praveenraman58:Praveen1826@cluster0.j3nswxx.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
