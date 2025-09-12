const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
            max: [100, "Title cannot be more than 100 characters"],
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["in-progress", "done"],
            default: "in-progress",
        },
    }, { timestamps: true }
);

const taskModel = new mongoose.model("tasks", taskSchema);
module.exports = taskModel;