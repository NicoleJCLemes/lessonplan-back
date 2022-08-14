import { Router } from "express";
import { authentication } from "../middlewares/authentication.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import { lessonSchema } from "../schemas/planningSchema.js";

const lessonRouter = Router();

lessonRouter.post("/lessons", authentication, schemaValidation(lessonSchema));
lessonRouter.get("/lessons", authentication)

export default lessonRouter;