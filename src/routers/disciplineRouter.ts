import { Router } from "express";
import { getDisciplines, postDiscipline } from "../controllers/disciplineController.js";
import { authentication } from "../middlewares/authentication.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import { disciplineSchema } from "../schemas/planningSchema.js";

const disciplineRouter = Router();

disciplineRouter.post("/disciplines", authentication, schemaValidation(disciplineSchema), postDiscipline);
disciplineRouter.get("/disciplines", authentication, getDisciplines);

export default disciplineRouter;