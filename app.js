const express = require("express");
let products = require("./products");
const app = express();
app.use(express.json());
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.post("/api/products", (req, res) => {
  //req.body.id = products.length + 1
  const id = products.length + 1;
  const newProduct = { id: id, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
app.delete("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    const newArray = products.filter((product) => product.id !== +productId);
    products = newArray;
    res.status(204).end();
  }
  res.status(404).end();
});
app.listen(8000, () => console.log("this app is running on 8000 port"));
