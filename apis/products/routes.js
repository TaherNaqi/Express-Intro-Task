const express = require("express");
const router = express.Router();
const { fetch, addproduct, deleteproduct } = require("./controllers");
router.get("/", fetch);
router.post("/", addproduct);
router.delete("/:productId", deleteproduct);
module.exports = router;
