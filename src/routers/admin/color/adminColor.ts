import Router from "express";
import { AdminColorController } from "../../../controllers/admin/color/adminColorController";

const router = Router();

router.get("/", AdminColorController.getColor);
router.post("/", AdminColorController.addColor);
router.put("/:id", AdminColorController.updateColor);
router.delete("/:id", AdminColorController.removeColor);

export default router;
