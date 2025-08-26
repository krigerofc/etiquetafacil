import NavDash from "@/app/components/Dashboard/NavDash/navdash";
import { Providers } from "@/app/providers";

export default async function DashHome() {
    return(
        <>
        <Providers>
            <NavDash/>
        </Providers>
        </>
    );
}