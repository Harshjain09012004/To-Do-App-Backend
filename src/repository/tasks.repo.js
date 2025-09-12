const taskModel = require("../models/task.model");

async function addTask(taskData){
    const response = await taskModel.create({
        userId: taskData.userId,
        title: taskData.title,
        description: taskData.description
    });
    
    return response;
}

async function removeTask(taskId){
    const response = await taskModel.findOneAndDelete({
        _id: taskId
    });
    return response;
}

async function getTasks(userId){
    const tasks = await taskModel.find({
        userId: userId
    });
    return tasks;
}

async function updateTask(taskId){
    const tasks = await taskModel.findOneAndUpdate(
        {_id: taskId}, {status: "done"}
    )
}

module.exports = {
    addTask, removeTask, 
    getTasks, updateTask
}