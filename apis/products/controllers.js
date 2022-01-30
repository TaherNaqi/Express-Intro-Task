let products = require("../../products");
exports.fetch = (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};
exports.addproduct = (req, res) => {
  try {
    //req.body.id = products.length + 1
    const id = products.length + 1;
    const newProduct = { id: id, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.deleteproduct = (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = products.find((product) => product.id === +productId);
    if (foundProduct) {
      const newArray = products.filter((product) => product.id !== +productId);
      products = newArray;
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.json({ message: error });
  }
};