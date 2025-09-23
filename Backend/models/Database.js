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



    // label




    
    // status =  Expired, Alert, Good
    static async CreateLabel(userId, ProductId, nome, amount, experation_Date, status) {
    const validStatuses = ['Expired', 'Alert', 'Good'];
    if (!validStatuses.includes(status)) return null;

    const labels = await prisma.labels.create({
        data: {
        userId: userId,
        productId: ProductId,
        name:nome,
        amount: amount,
        experation_Date: experation_Date,
        status: status
        }
    });

    return labels;
    }

    static async Search_Labels(userId){
        try{ 
            if(!userId) return null

            const labels = await prisma.labels.findMany({
                where:{
                        userId:userId
                },
                orderBy:{
                    createdAt:'desc'
                }
            })

            if(!labels) return null

            return labels
        } catch(error){
            return error
        }
        
    }



    // dashboard

    static async DashboardData(userId){
        try{
            if(!userId) return null
            const startOfToday = new Date();
            startOfToday.setHours(0, 0, 0, 0);

            const endOfToday = new Date();
            endOfToday.setHours(23, 59, 59, 999);

            const productsCount = await prisma.products.count({
                where: ({ 
                    userId: userId,
                })
            });

            const labelCount = await prisma.labels.count({
                where: ({ userId: userId})
            })

            const labelCount_today = await prisma.labels.count({
                where: ({ 
                    userId: userId,
                    createdAt:{
                        gte: startOfToday,
                        lte: endOfToday
                    }
                })
            })

            if(!productsCount || !labelCount || !labelCount_today){
                return null;
            }

            return {productsCount, labelCount, labelCount_today};
        } catch(err){
            return err
        }
    }
}


export default Database;
