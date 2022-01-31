const express = require("express");
const router = express.Router();
const {
  fetch,
  addproduct,
  deleteproduct,
  updateProduct,
} = require("./controllers");
router.get("/", fetch);
router.post("/", addproduct);
router.delete("/:productId", deleteproduct);
router.put("/:productId", updateProduct);
module.exports = router;
