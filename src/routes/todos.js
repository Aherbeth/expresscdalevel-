const express = require("express");
const todos = require("../data/todos.json");
const router = express.Router();

router.get("/todos", (req, res) => {
  res.send(todos);
});

router.get("/todos/:index", (req, res) => {
  const todoId = req.params.index;
  const realId = parseInt(todoId) - 1;
  res.send(todos[realId]);
});

module.exports = router;
