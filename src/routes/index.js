const express = require("express");
const authenticationRouter = require("./authentication.routes");
const authMiddleWare = require("../middleware/auth.middleware");
const taskRouter = require("./tasks.routes");

const apiRouter = express.Router();

apiRouter.use("/auth", authenticationRouter);
apiRouter.use("/task", authMiddleWare, taskRouter);

module.exports = apiRouter;