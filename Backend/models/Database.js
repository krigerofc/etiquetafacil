import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
        const {name, description, responsible, brand, temperature, default_Days, userId} = data;
            
        const tempNumber = Number(temperature);
        const daysNumber = Number(default_Days);

        const product = await prisma.products.create({
            data:{
                name, 
                description,
                responsible,
                brand,
                temperature: tempNumber,
                default_Days: daysNumber,
                userId: userId,
            }
        });

        return product;
    }

    static async Search_all_products(userId){
        const products = await prisma.products.findMany({
            where: {
                userId: userId
            }
        });

        return products
    }

    static async DeleteProduct(Id_product, userId){
        const deleted = await prisma.products.deleteMany({
            where:{
                id: Id_product,
                userId: userId
            }
        });

        return deleted;
    }

    static async EditProduct(id, name, description, responsible, brand, temperature, default_Days, userId) {
        const updated = await prisma.products.update({
            where: { id: id },
            data: {
                name,
                description,
                responsible,
                brand,
                temperature: Number(temperature),
                default_Days: Number(default_Days),
            }
        });

        if (updated.userId !== userId) {
            throw new Error("Você não tem permissão para editar este produto");
        }

        return updated; // 🔥 retorna o objeto atualizado
    }
}


export default Database;
