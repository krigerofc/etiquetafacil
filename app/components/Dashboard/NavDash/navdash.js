'use client'

import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from 'react-icons/ai';
import { MdLabel } from "react-icons/md";
import Link from "next/link";
import Profile from "../ProfileDash/profile";

export default function NavDash() {

    const [menuOpen, setMenuOpen] = useState(false);

    const navLink = [
        { href: '/Dashboard/Home', icon: <FaHome/>, label: 'Home'},
        { href: '/Dashboard/Products', icon: <AiOutlineProduct/>, label: 'Products'},
        { href: '/Dashboard/label', icon: <MdLabel/>, label: 'Label'},
    ]

    return (
        <>
        <div className="sm:hidden flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
            <Profile />
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 focus:outline-none"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
        </div>

        <div className={`bg-gray-50 border-r border-gray-200 fixed sm:relative top-0 left-0 h-screen sm:h-screen z-50 sm:block transition-transform duration-300
                            ${menuOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 w-64 sm:w-1/5`}>
            <div className="flex flex-col p-4 space-y-4 h-full overflow-y-auto">
                <Profile />
                
                {navLink.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <div className="text-2xl text-red-500">{link.icon}</div>
                        <p className="uppercase font-medium text-gray-800 text-sm sm:text-base">{link.label}</p>
                    </Link>
                ))}
            </div>
        </div>
        </>
    );
}
