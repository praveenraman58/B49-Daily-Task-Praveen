const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

app.post("/items", (req, res) => {
  const newItem = req.body;
  if (!newItem.id || !newItem.name) {
    return res.status(500).send("Item must have an id and name!");
  }

  items.push(newItem);
  res.status(201).send(`Item added with ID: ${newItem.id}!`);
});

app.get("/getItems", (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
