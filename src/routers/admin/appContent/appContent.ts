import Router from "express";
import { AdminAppContentController } from "../../../controllers/admin/appContent/adminAppContent";
import multer from "multer";

const upload = multer({ dest: "public/uploads" }); // Папка, в которую будут сохраняться загруженные файлы
const router = Router();

router.get("/navigate", AdminAppContentController.getNavigate);
router.put("/navigate/:id", AdminAppContentController.updateNavigate);
router.delete("/navigate/:id", AdminAppContentController.removeNavigate);
router.post(
  "/navigate",
  upload.fields([
    { name: "exampleOne", maxCount: 1 },
    { name: "exampleTwo", maxCount: 1 },
    { name: "exampleThree", maxCount: 1 },
    { name: "exampleFour", maxCount: 1 },
  ]),
  AdminAppContentController.addNavigate
);

export default router;
