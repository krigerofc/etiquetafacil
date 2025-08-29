import ProductHeader from "@/app/components/Dashboard/(products)/ProductHeader/productheader";
import ProductsList from "@/app/components/Dashboard/(products)/ProductsList/productslist";
import NavDash from "@/app/components/Dashboard/NavDash/navdash";
import { Providers } from "@/app/providers";

export default async function Products(){
    return(
        <Providers>
            <div className=" flex min-h-screen">
                <NavDash className="w-1/4"/>

                <div className="w-3/4 flex flex-col gap-4 p-4">
                    <ProductHeader/>
                    <ProductsList/>
                </div>
            </div>
        </Providers>
    );
}