import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

class UserDatabase {
    static async CreateUser(data) {
        const { email, password, cnpj, name } = data;

        const user = await prisma.user.create({
            data: {
                email,
                password,
                cnpj,
                name,
            },
        });

        return user;
    }

    static async FindUser(email){
        const user = await prisma.user.findUnique({
            where:{
                email:email.toLowerCase(),
            },
        });

        return user
    }

    static async FindCnpj(cnpj){
        const user = await prisma.user.findUnique({
            where:{
                cnpj:cnpj
            },
        });

        return user
    }
}

export default UserDatabase;
