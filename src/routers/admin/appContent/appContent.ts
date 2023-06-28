import Router from "express";
import { AdminAppContentController } from "../../../controllers/admin/appContent/adminAppContent";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: function (req, file, cb) {
    const fileName = `${uuidv4()}.${file.originalname.split(".").pop()}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

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
