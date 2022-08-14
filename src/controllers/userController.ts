import { Request, Response } from "express";
import { signInService, signUpService } from "../services/userService.js";
import jwt from "jsonwebtoken";
import "../config/setup.js";
import { findUserById } from "../repositories/userRepository.js";

export async function signUp(req: Request, res: Response) {
    const body = req.body;

    await signUpService(body);

    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const body = req.body;

    const token = await signInService(body);
    const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY) as { userId: number };
    const user = await findUserById(userId);

    res.status(201).send({ token, name: user.name });
}