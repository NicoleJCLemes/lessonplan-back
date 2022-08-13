import { Router } from "express";
import classRouter from "./classRouter.js";
import disciplineRouter from "./disciplineRouter.js";
import lessonRouter from "./lessonRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(disciplineRouter);
router.use(lessonRouter);
router.use(classRouter);

export default router;