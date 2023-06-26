import Router from "express";
import { AuthController } from "../../controllers/auth/authController";
import { AuthMiddleware } from "../../middleware/authMiddlware";
import { AdminAuthController } from "../../controllers/admin/auth/adminAuthController";

const router = Router();

router.get("/", AuthMiddleware.tokenVerification, AuthController.userAccess);
router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/admin/login", AdminAuthController.adminLogin);

export default router
