import { Router } from "express";
import { getClasses, postClass } from "../controllers/classController.js";
import { authentication } from "../middlewares/authentication.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import { classSchema } from "../schemas/planningSchema.js";
var classRouter = Router();
classRouter.post("/classes", authentication, schemaValidation(classSchema), postClass);
classRouter.get("/classes", authentication, getClasses);
export default classRouter;
