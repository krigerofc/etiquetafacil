import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

class Database {
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

    static async CreateProduct(data){
        const {name, description, responsible, brand, temperature, packaging, default_Days} = data;
            
        const tempNumber = Number(temperature);
        const daysNumber = Number(default_Days);

        const product = await prisma.products.create({
            data:{
                name, 
                description,
                responsible,
                brand,
                temperature: tempNumber,
                packaging,
                default_Days: daysNumber,
            }
        });

        return product;
    }
}


export default Database;
