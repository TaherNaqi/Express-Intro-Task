const express = require("express");
const app = express();
const connectDB = require("./db/database");
const productRoutes = require("./apis/products/routes");
const { logger, errorHandler, notFoundPage } = require("./middleware/logger");
app.use(express.json());
app.use(logger);
app.use("/api/products", productRoutes);
app.use(errorHandler);
app.use(notFoundPage);

connectDB();
app.listen(8000, () => console.log("this app is running on 8000 port"));
