import { Users } from "@prisma/client";
import { prisma } from "../config/database.js"

export interface User {
    name: string,
    email: string,
    password: string,
    repeat_password: string
};

export type LoginUser = Partial<Users>;
export type InsertUser = Omit<User, "repeat_password">;

export async function findUserById(userId: number) {
    const user = await prisma.users.findFirst({
        where: {
            id: userId
        }
    });
    return user;
};

export async function findByEmail(email: string) {
    const user = await prisma.users.findFirst({
        where: {
            email
        }
    });
    return user;
};

export async function insert(body: InsertUser) {
    await prisma.users.create({
        data: body
    });
};