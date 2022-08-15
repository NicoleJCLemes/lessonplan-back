import joi from "joi";
var disciplineSchema = joi.object({
    name: joi.string().required()
});
var classSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    time: joi.string().pattern(/([01]?[0-9]|2[0-3]):[0-5][0-9]/).required(),
    weekDay: joi.string().valid("Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo").required(),
    telephone: joi.string().pattern(/\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}/).required()
});
var lessonSchema = joi.object({
    classId: joi.number().integer().required(),
    disciplineId: joi.number().integer().required(),
    date: joi.date().required(),
    content: joi.string().required(),
    notes: joi.string().required()
});
export { disciplineSchema, classSchema, lessonSchema };
