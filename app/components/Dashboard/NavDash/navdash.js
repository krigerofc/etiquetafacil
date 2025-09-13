'use client';

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaBoxOpen, FaTags, FaBars } from "react-icons/fa";
import Profile from "../ProfileDash/profile";

export default function SidebarNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/Dashboard/Home", label: "Dashboard", icon: <FaHome /> },
    { href: "/Dashboard/Products", label: "Produtos", icon: <FaBoxOpen /> },
    { href: "/Dashboard/Label", label: "Etiquetas", icon: <FaTags /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-72 bg-gradient-to-b from-white to-gray-100 border-r border-gray-300 shadow-lg z-40 flex-col justify-between">
        <div className="p-6">
          <div className="mb-8">
            <Profile />
          </div>
          <nav className="space-y-4">
            {navItems.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-100 transition-all group"
              >
                <span className="text-red-500 text-xl group-hover:scale-110 transition-transform">{icon}</span>
                <span className="text-gray-800 font-semibold">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-6 text-sm text-gray-500">© 2025 EtiquetaFácil</div>
      </aside>

      {/* Push content right for desktop */}
      <div className="hidden md:block w-72 flex-shrink-0"></div>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3 shadow-md z-50">
        <div className="text-lg font-bold text-red-500">EtiquetaFácil</div>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-red-500 text-2xl"
          aria-label="Abrir menu"
        >
          <FaBars />
        </button>
      </header>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Sidebar */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-full w-90  text-4xl bg-gray-100 border-r border-gray-200 shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-20 px-6 space-y-6 overflow-y-auto h-full">
          {/* Profile no mobile */}
          <Profile />

          {/* Navegação */}
          <nav className="space-y-4">
            {navItems.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-4 rounded-md bg-white hover:bg-red-100 transition-all shadow-sm"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-red-500 text-xl">{icon}</span>
                <span className="text-gray-800 font-medium">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Push content down on mobile */}
      <div className="md:hidden h-16"></div>
    </>
  );
}
