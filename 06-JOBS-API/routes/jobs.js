const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getJob,
  updateJob,
  createJob,
  deleteJob,
  deleteAllJobs
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJob).delete(deleteAllJobs);
router.route("/:id").patch(updateJob).delete(deleteJob).get(getJob);

module.exports = router;
