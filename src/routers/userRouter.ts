import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import { singInSchema, singUpSchema } from "../schemas/userSchemas.js";

const userRouter = Router();

userRouter.post("/sign-up", schemaValidation(singUpSchema), signUp);
userRouter.post("/sign-in", schemaValidation(singInSchema), signIn);

export default userRouter;