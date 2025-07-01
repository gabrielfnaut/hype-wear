"use client";

import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-96 bg-[#697BA3] text-white p-8 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav className="flex flex-col gap-8 mt-16 text-4xl font-ramaraja">
        <Link href="/login" onClick={onClose}>
          Fazer Login
        </Link>
        <Link href="/cart" onClick={onClose}>
          Meu Carrinho
        </Link>
        <Link href="/store" onClick={onClose}>
          Toda a Loja
        </Link>
      </nav>
    </div>
  );
}
