import { NextFunction, Request, Response } from "express";

export default function errorHandlerMiddleware(error, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    res.status(500).send("Unknown error");
}