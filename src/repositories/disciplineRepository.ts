import { Disciplines } from "@prisma/client";
import { prisma } from "../config/database.js";

export type Discipĺine = Omit<Disciplines, "id">;

async function findByName(name:string) {
    const discipline = await prisma.disciplines.findFirst({
        where: {
            name: {
                equals: name,
                mode: "insensitive"
            }
        }
    });

    return discipline;
};

async function insertDiscipline(body: Discipĺine) {
    await prisma.disciplines.create({
        data: body
    });
};

async function getDisciplines(userId: number) {
    const disciplines = await prisma.disciplines.findMany({
        where: {
            userId
        }
    });

    return disciplines;
}

const disciplineRepository = {
    findByName,
    insertDiscipline,
    getDisciplines
};

export default disciplineRepository;