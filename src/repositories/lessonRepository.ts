import { Lessons } from "@prisma/client";
import { prisma } from "../config/database.js";

export type Lesson = Omit<Lessons, "id">;

async function findByClassIdDisciplineIdAndDate(body: Lesson) {
    const { classId, disciplineId, date } = body
    const lesson = await prisma.lessons.findFirst({
        where: {
            classId,
            disciplineId,
            date
        }
    });

    return lesson;
};

async function insertLesson(body: Lesson) {
    const lesson = await prisma.lessons.create({
        data: body
    });
};

async function getLessons(userId:number) {
    const lessons = await prisma.lessons.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            class: {select: {
                name: true,
                time: true
            }},
            discipline: {select: {name: true}},
            date: true,
            content: true,
            notes: true
        }
    });

    return lessons;
}

async function findByClassId(classId:number) {
    const lesson = await prisma.classes.findFirst({
        where: {
            id: classId
        }
    });

    return lesson;
}

async function findByDisciplineId(disciplineId:number) {
    const lesson = await prisma.disciplines.findFirst({
        where: {
            id: disciplineId
        }
    });

    return lesson;
}

const lessonRepository = {
    findByClassIdDisciplineIdAndDate,
    insertLesson,
    getLessons,
    findByClassId,
    findByDisciplineId
};

export default lessonRepository;