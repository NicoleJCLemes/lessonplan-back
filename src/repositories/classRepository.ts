import { Classes } from "@prisma/client";
import { prisma } from "../config/database.js";

export type Class = Omit<Classes, "id">;

async function findByTimeAndWeekday(time: string, weekDay: string) {
    const _class = await prisma.classes.findFirst({
        where: {
            time,
            weekDay
        }
    });

    return _class;
};

async function insertClass(body: Class) {
    await prisma.classes.create({
        data: body
    });
};

async function getClasses(userId: number) {
    const classes = await prisma.classes.findMany({
        where: {
            userId
        }
    });

    return classes;
}

const classRepository = {
    findByTimeAndWeekday,
    insertClass,
    getClasses
};

export default classRepository;