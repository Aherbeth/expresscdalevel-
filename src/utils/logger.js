const logger = (req, res, next) => {
  const date = new Date().toISOString();
  const routeCalled = req.originalUrl;
  const method = req.method;
  console.log(`${date} - ${routeCalled} with ${method}`);
  next();
};

module.exports = logger;
