const Product = require("../../db/models/Product");
exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};
exports.productList = async (req, res, next) => {
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
exports.addproduct = async (req, res, next) => {
  try {
    //req.body.id = products.length + 1
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.deleteproduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete({
      _id: req.product.id,
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const foundProduct = await Product.findByIdAndUpdate(
      { _id: req.product.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(foundProduct);
  } catch (error) {
    next(error);
  }
};
