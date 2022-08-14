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
        }
    });

    return lessons;
}

async function findByClassId(classId:number) {
    const lesson = await prisma.lessons.findFirst({
        where: {
            classId
        }
    });

    return lesson;
}

async function findByDisciplineId(disciplineId:number) {
    const lesson = await prisma.lessons.findFirst({
        where: {
            disciplineId
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