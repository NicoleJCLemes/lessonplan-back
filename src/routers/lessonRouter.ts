import { Router } from "express";
import { getLessons, postLesson } from "../controllers/lessonController.js";
import { authentication } from "../middlewares/authentication.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import { lessonSchema } from "../schemas/planningSchema.js";

const lessonRouter = Router();

lessonRouter.post("/lessons", authentication, schemaValidation(lessonSchema), postLesson);
lessonRouter.get("/lessons", authentication, getLessons)

export default lessonRouter;