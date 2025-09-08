"use client";

import ProductHeader from "@/app/components/Dashboard/(products)/ProductHeader/productheader";
import ProductsList from "@/app/components/Dashboard/(products)/ProductsList/productslist";
import NavDash from "@/app/components/Dashboard/NavDash/navdash";

import { Providers } from "@/app/providers";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Products(){
    const {data: session, status} = useSession();
    const [products_list, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function Get_products() {
            try{
                const res = await fetch("/api/products/search", {
                    method:"POST",
                    body:JSON.stringify({
                        userId:session.user.id,
                    })
                });
                const data = await res.json();
                console.log("Resposta da API:", data);
                if (data.success) {
                    console.log(data.success)
                    setProducts(data.products);
                }
            } catch(err){
                console.log(err)
            } finally{
                setLoading(false)
            }
        }

        Get_products();
    }, [session])

    if (!session) return <div>Acesso negado</div>;
    if (status === "loading") return <div>Carregando...</div>;
    if (loading) return <div>Carregando produtos...</div>;

    return(
        <Providers>
            <div className=" flex min-h-screen">
                <NavDash/>

                <div className="w-4/4 flex flex-col gap-4 p-4">
                    <ProductHeader/>
                    <ProductsList products={products_list}/>
                </div>
            </div>
        </Providers>
    );
}