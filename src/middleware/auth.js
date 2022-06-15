const middleware = (req, res, next) => {
  console.log("hello middleware");

  next();
};

module.exports = middleware;
