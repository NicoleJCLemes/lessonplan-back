import joi from "joi";
var singUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    repeat_password: joi.ref("password")
});
var singInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});
export { singUpSchema, singInSchema };
