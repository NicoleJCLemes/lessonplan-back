import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "../config/setup.js";
import { User, findByEmail, LoginUser, insert } from "../repositories/userRepository.js";

export async function signUpService(body:User) {
    
    const user = await findByEmail(body.email);
    if(user) {
        throw {
            type: "Conflict",
            message: "This email already exists, try a new one"
        };
    };

    const { name, email, password } = body;
    await insert({
        name,
        email,
        password: bcrypt.hashSync(password, 10)
    });
}

export async function signInService(body:LoginUser) {

    const user = await findByEmail(body.email);
    if(!user) {
        throw {
            type: "Not Found",
            message: "User not found"
        };
    };

    const passwordMatches = bcrypt.compareSync(body.password, user.password);
    if(!passwordMatches) {
        throw {
            type: "Unauthorized",
            message: "The password does not match"
        };
    };

    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ userId: user.id }, secretKey);
    return token
}