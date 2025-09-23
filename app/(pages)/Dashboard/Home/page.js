'use client';

import NavDash from "@/app/components/Dashboard/NavDash/navdash";
import Numbers from "@/app/components/Dashboard/(dashboard)/Numbers/numbers";

import { Providers } from "@/app/providers";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function DashHome() {
    const { data:session, status } = useSession();
    const [ DashData, setDashData] = useState({});

    useEffect(() => {
        async function DashData(){
            try{

                const res = await fetch('/api/dashboard/data', {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: session.user.id
                    }),
                });

                const data = await res.json();
                if(data.success){
                    const label = data.labelCount;
                    const products = data.productsCount;
                    setDashData({ label, products })
                }else{
                    console.log("Error fetching dashboard data");
                }
            } catch(err){
                console.log(err);
            }
        }

        DashData();
    }, [session]);

    return(
        <Providers>
        <div className="flex min-h-screen">
            <NavDash />

            <div className="w-full flex flex-col gap-1 p-6 ">

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                       <Numbers title="Total de produtos" value={DashData.label}/>
                    </div>
        
                    <div className="md:w-2/3">
                        <Numbers title="Total de etiquetas" value={DashData.products}/>
                    </div>
                </div>
            </div>
        </div>
        </Providers>
    );
}