import classRepository, { Class } from "../repositories/classRepository.js";

async function postClassService(body:Class) {
    const exists = await classRepository.findByTimeAndWeekday(body.time, body.weekDay);

    if(exists) {
        throw {
            type: "Conflict",
            message: "This time is occupied"
        };
    };

    await classRepository.insertClass(body);
};

async function getClassesService(userId: number) {

    const classes = await classRepository.getClasses(userId);

    return classes;
};

const classService = {
    postClassService,
    getClassesService
};

export default classService;