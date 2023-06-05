import Router, { Request, Response } from "express";
import { AuthController } from "../../controllers/auth/authController";

const router = Router();

router.post("/", AuthController.auth);

module.exports = router;
