const express = require("express");
const router = express.Router();
const {
  productList,
  addproduct,
  deleteproduct,
  updateProduct,
  fetchProduct,
} = require("./controllers");

router.param("productId", async (req, res, next, productId) => {
  const foundProduct = await fetchProduct(productId, next);
  if (foundProduct) {
    req.product = foundProduct;
    next();
  } else next({ status: 404, message: "Product not found" });
});

router.get("/", productList);
router.post("/", addproduct);
router.delete("/:productId", deleteproduct);
router.put("/:productId", updateProduct);
module.exports = router;
