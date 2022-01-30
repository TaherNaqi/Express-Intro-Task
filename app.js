const express = require("express");
const app = express();
const productRoutes = require("./apis/products/routes");
app.use(express.json());
app.use("/api/products", productRoutes);
app.listen(8000, () => console.log("this app is running on 8000 port"));
