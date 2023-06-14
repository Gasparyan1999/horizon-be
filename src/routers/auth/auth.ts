import Router from "express";
import { AuthController } from "../../controllers/auth/authController";
import { AuthMiddleware } from "../../middleware/authMiddlware";

const router = Router();

router.get("/", AuthMiddleware.tokenVerification, AuthController.userAccess);
router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

export default router
