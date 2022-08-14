import { Request, Response } from "express";
import lessonService from "../services/lessonService.js";

export async function postLesson(req: Request, res: Response) {
    const body = req.body;

    const user = res.locals.user;
    await lessonService.postLessonService({...body, userId: user.id});

    res.sendStatus(201);
}

export async function getLessons(req: Request, res: Response) {
    const user = res.locals.user;
    const lessons = await lessonService.getLessonsService(user.id);

    res.status(200).send(lessons);
}