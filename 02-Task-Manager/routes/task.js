const express = require('express');
const router = express.Router();
const {getAllTask,
        createTask,
        getSingleTask,
        updateTask,
        deleteTask} = require('../controllers/task');

router.route('/').get(getAllTask);
router.route('/').post(createTask);
router.route('/:id').get(getSingleTask);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask);


module.exports = router;