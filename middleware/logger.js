exports.logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
};

exports.errorHandler = (req, res) => {
  res.status(404).json({ message: "Path not found" });
};
exports.notFoundPage = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "something went wrong" });
};
