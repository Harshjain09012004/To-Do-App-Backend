const express = require("express");

const { 
    addTask, getTasks, removeTask, updateTask
} = require("../repository/tasks.repo");

const taskRouter = express.Router();

taskRouter.get("/:userId", async (req, res)=>{
    try{
        let { userId } = req.params;
        userId = Number(userId);

        if(!userId){
            return res.status(400).json({ 
                success: false,
                message: "Wrong UserId",
                body: {},
                err: {}
            });
        }
        const response = await getTasks(userId);

        return res.status(200).json({ 
            success: true,
            message: "Fetched Task",
            body: response,
            err: {}
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Unable To Fetch Tasks",
            error: err,
            body: {}
        });
    }
});

taskRouter.delete("/:taskId", async (req, res)=>{
    try{
        const { taskId } = req.params;
        const response = await removeTask(taskId);

        return res.status(200).json({ 
            success: true,
            message: "Deleted Task",
            body: response,
            err: {}
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Unable To Delete Tasks",
            error: err,
            body: {}
        });
    }
});

taskRouter.post("/", async (req, res)=>{
    try{
        const response = await addTask(req.body);
        return res.status(200).json({ 
            success: true,
            message: "Task Created",
            body: response,
            err: {}
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Unable To Create Tasks",
            error: err,
            body: {}
        });
    }
});

taskRouter.put("/:taskId", async (req, res)=>{
    try{
        const { taskId } = req.params;
        const response = await updateTask(taskId);

        return res.status(200).json({ 
            success: true,
            message: "Task Status Updated",
            body: response,
            err: {}
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Unable To Update Task Status",
            error: err,
            body: {}
        });
    }
});

module.exports = taskRouter;