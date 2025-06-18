const Job = require("../models/Jobs");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  res.send("get a job API");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
};
const updateJob = async (req, res) => {
  res.send("update job API");
};
const deleteJob = async (req, res) => {
  res.send("delete job API");
};

const deleteAllJobs = async (req, res) => {
  await Job.remove({});
  res.send("delelte all");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  deleteAllJobs,
};
