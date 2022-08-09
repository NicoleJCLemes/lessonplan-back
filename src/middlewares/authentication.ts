import { NextFunction, Request, Response } from "express";
import { findUserById } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import "../config/setup.js";

export async function authentication(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    if(!authorization) {
        throw {
            type: "Unauthorized",
            message: "Authorization headers is missing"
        };
    };

    const token = authorization.replace("Bearer", "").trim();
    if(!token) {
        throw {
            type: "Unauthorized",
            message: "Token inexistent"
        };
    };

    const secretKey = process.env.JWT_SECRET_KEY;
    const { userId } = jwt.verify(token, secretKey) as { userId: number };
    const user = await findUserById(userId);

    if(!user) {
        throw {
            type: "Unauthorized",
            message: "Token invalid"
        };
    };

    res.locals.user = user;

    next();
}