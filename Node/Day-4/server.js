const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

const DB_URL = "mongodb://0.0.0.0:27017/admin";

const bookSchema = new mongoose.Schema({
  tittle: String,
  author: String,
  publishedDate: String,
});

const Book = mongoose.model("Book", bookSchema);

app.use(bodyParser.json());

mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

//  CREATE

app.post("/book", async (req, res) => {
  const book = new Book(req.body);
  try {
    const saveBook = await book.save();
    res.status(201).send(saveBook);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// READ

app.get("/books", async (req, res) => {
  try {
    const books = await book.find();
    res.status(201).send(books);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
