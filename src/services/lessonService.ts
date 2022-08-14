import lessonRepository, { Lesson } from "../repositories/lessonRepository.js";

async function postLessonService(body:Lesson) {
    const exists = await lessonRepository.findByClassIdDisciplineIdAndDate(body);

    if(exists) {
        throw {
            type: "Conflict",
            message: "This class is already planned"
        };
    };

    const existsClass = await lessonRepository.findByClassId(body.classId);
    const existsDiscipline = await lessonRepository.findByDisciplineId(body.disciplineId);

    if(!existsClass || !existsDiscipline) {
        throw {
            type: "Not Found",
            message: "This class or discipline was not found"
        };
    }

    await lessonRepository.insertLesson(body);
};

async function getLessonsService(userId:number) {
    const lessons = await lessonRepository.getLessons(userId);

    return lessons;
};

const lessonService = {
    postLessonService,
    getLessonsService
};

export default lessonService;