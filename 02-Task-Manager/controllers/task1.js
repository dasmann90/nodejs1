const Task = require("../models/taskModel");
const asyncWarpper = require("../middleware/async");
const {createCustomError} = require("../error/custom-error");

const getAllTaskAsync = asyncWarpper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTaskAsync = asyncWarpper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTaskAsync = asyncWarpper(async (req, res,next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`Task is not found with the ID: ${taskId}`,404))
    // return res
    //   .status(404)
    //   .json({ msg: `Task is not found with the ID: ${taskId}` });
  }
  res.status(200).json({ task });
});

const updateTaskAsync = asyncWarpper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `Task is not fond with the ID : ${taskId}` });
  }
  res.status(200).json({ task });
});

const deleteTaskAsync = asyncWarpper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ mag: `No task with this ID : ${taskId}` });
  }
  //res.status(200).json({ task });
  res.status(200).json({ task: null, status: "success" });
});

module.exports = {
  getAllTaskAsync,
  createTaskAsync,
  getSingleTaskAsync,
  updateTaskAsync,
  deleteTaskAsync,
};
