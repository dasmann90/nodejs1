
const getAllTask = (req,res)=>{
    res.send('Api call')
}

const createTask = (req,res)=>{
    res.send('create Task')
}

const getSingleTask = (req,res)=>{
    res.send('get single Task')
}

const updateTask = (req,res)=>{
    res.send('update Task')
}

const deleteTask = (req,res)=>{
    res.send('delete task')
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}