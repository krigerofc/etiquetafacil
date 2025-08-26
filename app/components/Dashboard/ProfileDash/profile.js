
'use client'

import { useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

export default function Profile(){

    const { data: session, status } = useSession();

    if (!session){
        return
    }

    return(
        <div className="w-full h-28 bg-gray-50 shadow-sm rounded-sm flex items-center p-4">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center">
                <FaUserCircle className="hidden sm:block" size={60} />
                
                <ul className="text-center sm:text-left">
                    <li>
                        <h1 className="uppercase tracking-wide text-base sm:text-lg md:text-xl">
                            {session.user.name}
                        </h1>
                    </li>
                    <li>
                        <p className="text-gray-400 text-sm sm:text-base">{session.user.cnpj}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}