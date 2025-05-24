const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

const {
  getAllTaskAsync,
  createTaskAsync,
  getSingleTaskAsync,
  updateTaskAsync,
  deleteTaskAsync,
} = require("../controllers/task1");

//router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSingleTaskAsync).patch(updateTask).delete(deleteTask);

router.route("/").get(getAllTaskAsync).post(createTaskAsync);

module.exports = router;
