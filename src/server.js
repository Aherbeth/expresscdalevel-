const express = require("express");
const logger = require("./utils/logger");
const todosRouter = require("./routes/todos");

const app = express();

/**
 * Middlewares
 */
app.use(logger);

/**
 * Routers
 */
app.use(todosRouter);

app.get("/", (req, res, next) => {
  console.log(res.statusCode);
  res.send("hello");
});

app.listen(3000);
