"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Sidebar } from "@/components/Sidebar";

export default function Store() {
  const router = useRouter();
  const { addToCart, cartCount } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Moletom SOFT Palmers 1.0",
      price: "R$ 299,00",
      description: "Feito 100% em algodão trazendo conforto e qualidade",
      image: "/images/t-shirt.svg",
    },
    {
      id: 2,
      name: "Nome do PRODUTO aqui",
      price: "R$ 110,00",
      description:
        "Descritivo do produto e seus tecidos, breve, apenas para conhecimento",
      image: "/images/shirt.svg",
    },
    {
      id: 3,
      name: "Nome do PRODUTO aqui",
      price: "R$ 110,00",
      description:
        "Descritivo do produto e seus tecidos, breve, apenas para conhecimento",
      image: "/images/shirt.svg",
    },
    {
      id: 4,
      name: "Nome do PRODUTO aqui",
      price: "R$ 110,00",
      description:
        "Descritivo do produto e seus tecidos, breve, apenas para conhecimento",
      image: "/images/shirt.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#D2E7FE]">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {/* Navigation Menu */}
      <nav className="flex items-center justify-between px-16 py-12">
        {/* Hamburger Menu */}
        <button onClick={() => setIsSidebarOpen(true)} className="space-y-2 hover:cursor-pointer">
          <div className="w-16 h-3 bg-black rounded-sm"></div>
          <div className="w-16 h-3 bg-black rounded-sm"></div>
          <div className="w-16 h-3 bg-black rounded-sm"></div>
        </button>

        {/* Logo */}
        <div className="text-center">
          <h1
            className="text-6xl font-bold text-black"
            style={{ fontFamily: "Sedan SC, serif" }}
          >
            HypeWear
          </h1>
          <div className="w-full h-px bg-black mt-4"></div>
        </div>

        {/* Cart and Login */}
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 overflow-hidden hover:cursor-pointer" onClick={() => router.push("/cart")}>
            <Image src="/images/cart.png" alt="Cart" width={64} height={64} />
            {cartCount > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                {cartCount}
              </div>
            )}
          </div>
          <button
            className="bg-[#18264A] text-white px-5 py-3 rounded-lg shadow-lg hover:shadow-xl hover:cursor-pointer transition-shadow"
            onClick={() => router.push("/login")}
            style={{ fontFamily: "Ramaraja, serif" }}
          >
            FAZER LOGIN
          </button>
        </div>
      </nav>

      {/* Novidades Section */}
      <div className="px-16 mb-8">
        <h2
          className="text-4xl text-black mb-2"
          style={{ fontFamily: "Ramaraja, serif" }}
        >
          Novidades
        </h2>
        <div className="w-42 h-px bg-black"></div>
      </div>

      {/* Products Grid */}
      <div className="px-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Product Image */}
              <div className="h-72 bg-gray-200 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={283}
                  height={283}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="border-b border-black mb-4"></div>

                <h3
                  className="text-xl font-medium text-black mb-2"
                  style={{ fontFamily: "Ramaraja, serif" }}
                >
                  {product.name}
                </h3>

                <p
                  className="text-sm text-black/65 text-center mb-4 leading-tight"
                  style={{ fontFamily: "Ramaraja, serif" }}
                >
                  {product.description}
                </p>

                <p
                  className="text-xl font-medium text-black text-center mb-6"
                  style={{ fontFamily: "Ramaraja, serif" }}
                >
                  {product.price}
                </p>

                <button
                  className="w-full bg-[#18264A] text-white py-4 rounded-md shadow-md hover:shadow-lg hover:cursor-pointer transition-shadow"
                  style={{ fontFamily: "Ramaraja, serif" }}
                  onClick={() => addToCart(product)}
                >
                  COMPRAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#18264A] text-white py-12">
        <div className="px-16">
          {/* Footer Content */}
          <div className="text-center mb-8">
            <h3
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Sedan SC, serif" }}
            >
              HypeWear
            </h3>
            <div className="w-full max-w-2xl mx-auto h-px bg-white mb-8"></div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Image
                  src="/images/email-icon.svg"
                  alt="Email"
                  className="w-5 h-5"
                  width={21}
                  height={21}
                />
                <p
                  className="text-lg"
                  style={{ fontFamily: "Ramaraja, serif" }}
                >
                  hypewearcontato@gmail.com
                </p>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Image
                  src="/images/instagram-icon.svg"
                  alt="Instagram"
                  width={21}
                  height={21}
                  className="w-5 h-5"
                />
                <p
                  className="text-lg"
                  style={{ fontFamily: "Ramaraja, serif" }}
                >
                  @hypewear_oficial
                </p>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Image
                  src="/images/phone-icon.svg"
                  alt="Phone"
                  width={21}
                  height={21}
                  className="w-5 h-5"
                />
                <p
                  className="text-lg"
                  style={{ fontFamily: "Ramaraja, serif" }}
                >
                  33 99999-9999
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
