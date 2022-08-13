import disciplineRepository, { Discipĺine } from "../repositories/disciplineRepository.js";

async function postDisciplineService(body: Discipĺine) {

    const exists = await disciplineRepository.findByName(body.name);

    if(exists) {
        throw {
            type: "Conflict",
            message: "This discipline is already registered"
        }
    };
    
    await disciplineRepository.insertDiscipline(body);
}

async function getDisciplinesService(userId:number) {

    const disciplines = await disciplineRepository.getDisciplines(userId);

    return disciplines;
}

const disciplineService = {
    postDisciplineService,
    getDisciplinesService
};

export { disciplineService };