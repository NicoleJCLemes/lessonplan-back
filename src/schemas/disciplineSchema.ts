import joi from "joi";

const disciplineSchema = joi.object({
    name: joi.string().required()
});

export { disciplineSchema };