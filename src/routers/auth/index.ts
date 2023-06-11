import Router from "express";
import { AuthController } from "../../controllers/auth/authController";

const router = Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

module.exports = router;
