const getAllJobs = async (req, res) => {
  res.send(req.user);
};

const getJob = async (req, res) => {
  res.send("get a job API");
};

const createJob = async (req, res) => {
  res.send("create job API");
};
const updateJob = async (req, res) => {
  res.send("update job API");
};
const deleteJob = async (req, res) => {
  res.send("delete job API");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
