const TodoItem = require("../models/TodoItem");

// exports.createTodoItem = async (req, res, next) => {
//   console.log("req body: ", req.body);
//   const { task, date } = req.body;
//   const todoItem = new TodoItem({ task, date });
//   const savedItem = await todoItem.save();
//   res.status(201).json(savedItem);
// };

exports.createTodoItem = async (req, res, next) => {
  try {
    console.log("req body: ", req.body);
    const { task, date } = req.body;
    const todoItem = new TodoItem({ task, date: new Date(date) });
    const savedItem = await todoItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error("Error saving todo:", err);
    res.status(500).json({ error: "Failed to save todo" });
  }
};

exports.getTodoItem = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  res.json(todoItems);
};

exports.deleteTodoItem = async (req, res, next) => {
  const { id } = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(200).json({ _id: id });
};

exports.markCompleted = async (req, res, next) => {
  const { id } = req.params;
  // Get the completed value from the request body (default to true if not provided)
  const { completed } = req.body;
  const todoItem = await TodoItem.findById(id);
  if (!todoItem) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todoItem.completed = completed;
  await todoItem.save();
  res.json(todoItem);
};
