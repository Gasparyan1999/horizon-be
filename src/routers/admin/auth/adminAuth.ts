import Router from "express";
import { AuthController } from "../../../controllers/auth/authController";

const router = Router();

router.get("/", AuthController.userAccess);

export default router;
