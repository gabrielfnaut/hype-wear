"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import OrderSummary from "@/components/OrderSummary";
import SizeSelector from "@/components/SizeSelector";
import ShippingCalculator from "@/components/ShippingCalculator";
import { useCart } from "@/context/CartContext";
import { Sidebar } from "@/components/Sidebar";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [shipping, setShipping] = useState(27.5);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sizes = ["P", "M", "G", "GG"];

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleShippingCalculate = (cep: string) => {
    // Simulate shipping calculation
    console.log("Calculating shipping for CEP:", cep);
    // You would typically call an API here
    setShipping(27.5);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with items:", cartItems);
    // Implement checkout logic here
  };

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum +
      parseFloat(item.price.replace("R$ ", "").replace(",", ".")) *
        item.quantity,
    0,
  );
  const total = subtotal + shipping;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className="min-h-screen bg-blue-100"
      style={{ backgroundColor: "#D2E7FE" }}
    >
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Cart Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-normal text-black mb-2 font-ramaraja">
                    Seu carrinho:
                  </h2>
                  <div className="w-full h-px bg-black"></div>
                </div>
              </div>

              {/* Items Count */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-normal text-black font-ramaraja">
                  Itens:
                </span>
                <span className="text-3xl font-normal text-black font-ramaraja">
                  {totalItems}
                </span>
              </div>

              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={283}
                          height={283}
                          className="rounded-lg object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-normal text-black font-ramaraja">
                            {item.name}
                          </h3>
                          <p className="text-lg text-gray-600 mt-2 font-ramaraja">
                            {item.description}
                          </p>
                        </div>

                        {/* Size Selector */}
                        <SizeSelector
                          sizes={sizes}
                          selectedSize={selectedSize}
                          onSizeSelect={handleSizeChange}
                          className="mb-4"
                        />

                        {/* Shipping Calculator */}
                        <ShippingCalculator
                          onCalculate={handleShippingCalculate}
                          className="mb-4"
                        />

                        {/* Quantity Controls and Price */}
                        <div className="flex items-center justify-between pt-4">
                          <div className="flex items-center gap-6">
                            {/* Quantity Display */}
                            <span className="text-lg font-normal text-black font-ramaraja">
                              QNT: {item.quantity}
                            </span>

                            {/* Quantity Control Buttons */}
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    Math.max(1, item.quantity - 1),
                                  )
                                }
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold border-2 border-black transition-colors"
                                style={{
                                  boxShadow:
                                    "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                -
                              </button>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold border-2 border-black transition-colors"
                                style={{
                                  boxShadow:
                                    "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Price and Remove Button */}
                          <div className="flex items-center gap-6">
                            <span className="text-2xl font-normal text-black font-ramaraja">
                              {item.price}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-7 h-7 hover:opacity-70 transition-opacity"
                              title="Remover item"
                            >
                              <Image
                                src="/images/delete-icon.png"
                                alt="Remover item"
                                width={22}
                                height={22}
                                className="w-full h-full object-contain"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Additional Info */}
                {cartItems.length === 0 && (
                  <div className="pt-6 text-center">
                    <p className="text-lg font-normal text-gray-500 mb-4 font-ramaraja">
                      Seu carrinho está vazio
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary and Payment */}
          <div className="space-y-6">
            {/* Order Summary */}
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              onCheckout={handleCheckout}
            />

            {/* Payment Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-normal text-black font-ramaraja">
                Pagamentos
              </h3>
              {/* Payment options would go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
