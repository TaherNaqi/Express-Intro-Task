const express = require("express");
const app = express();
const connectDB = require("./db/database");
const PORT = 8000;
const productRoutes = require("./apis/products/routes");
app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
});

app.use("/api/products", productRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "something went wrong" });
  next();
});
app.use(express.json());
connectDB();
app.listen(8000, () => console.log("this app is running on 8000 port"));
