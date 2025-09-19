import NavDash from "@/app/components/Dashboard/NavDash/navdash";

import { Providers } from "@/app/providers";

export default async function DashHome() {
    return(
        <Providers>
        <div className="flex min-h-screen">
            <NavDash />

            <div className="w-full flex flex-col gap-2 p-6">

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                    </div>
        
                    <div className="md:w-2/3">
                    </div>
                </div>
            </div>
        </div>
        </Providers>
    );
}