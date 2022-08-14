import { Request, Response } from "express";
import classService from "../services/classService.js";

export async function postClass(req: Request, res: Response) {
    const body = req.body;

    const user = res.locals.user;
    await classService.postClassService({...body, userId: user.id});

    res.sendStatus(201);
};

export async function getClasses(req: Request, res: Response) {
    const user = res.locals.user;
    const classes = await classService.getClassesService(user.id);

    res.status(200).send(classes);
};