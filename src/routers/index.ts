const Router = require("express");
const authRouter = require("./auth/index");

const router = new Router();

router.use("/auth", authRouter);

module.exports = router;
