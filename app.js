const express = require("express");
const products = require("./products");
const app = express();
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.listen(8000, () => console.log("this app is running on 8000 port"));
