import { Request, Response } from "express";
import { disciplineService } from "../services/disciplineService.js";

export async function postDiscipline(req: Request, res: Response) {
    const body = req.body;

    const user = res.locals.user;
    await disciplineService.postDisciplineService({...body, userId: user.id});

    res.sendStatus(201);
}

export async function getDisciplines(req: Request, res: Response) {
    
    const user = res.locals.user;
    const disciplines = await disciplineService.getDisciplinesService(user.id);

    res.status(200).send(disciplines);
}