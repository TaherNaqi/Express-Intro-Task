const Product = require("../../db/models/Product");
exports.fetch = async (req, res, next) => {
  try {
    const productArray = await Product.find({}).select(
      "name description price color"
    );
    //const productArray = await
    //Product.find({}, {"color":0, "quantity":0, ....}) removing these elements
    res.json(productArray);
  } catch (error) {
    next(error);
  }
};
exports.addproduct = async (req, res) => {
  try {
    //req.body.id = products.length + 1
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByIdAndDelete({ _id: productId });
    if (foundProduct) res.status(204).end();
    else next({ status: 404, message: "Product not found" });
  } catch (error) {
    next(error);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );
    if (product) res.status(200).json(product);
    else next({ status: 404, message: "Product not found" });
  } catch (error) {
    next(error);
  }
};
