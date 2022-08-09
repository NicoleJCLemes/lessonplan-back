import { Request, Response } from "express";
import { signInService, signUpService } from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
    const body = req.body;

    await signUpService(body);

    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const body = req.body;

    const token = await signInService(body);

    res.status(201).send(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MDA1OTQ0Mn0.wTNGjtOdeLuiQ134Xj8RHFuCvs-zecaxmehD0Ipliow
}