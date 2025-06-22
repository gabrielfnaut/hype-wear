import React from "react";
import Image from "next/image";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  total,
  onCheckout,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-10 h-fit">
      <h2 className="text-3xl font-normal text-black mb-8 font-ramaraja">
        Resumo do pedido:
      </h2>

      {/* Product Summary */}
      <div className="flex items-start gap-4 mb-6">
        <Image
          src="/images/product-small.png"
          alt="Produto"
          width={110}
          height={110}
          className="rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-normal text-black mb-2 font-ramaraja">
            Moletom SOFT Palmers 1.0
          </h3>
          <p className="text-2xl font-normal text-black font-ramaraja">
            Tamanho: M
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-black mb-8"></div>

      {/* Price Breakdown */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-normal text-black font-ramaraja">
            <div>Total dos itens:</div>
            <div>Frete:</div>
          </div>
          <div className="text-right text-2xl font-normal text-black font-ramaraja">
            <div>R$ {subtotal.toFixed(2).replace(".", ",")}</div>
            <div>R$ {shipping.toFixed(2).replace(".", ",")}</div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-black mb-6"></div>

      {/* Total */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-2xl font-normal text-black font-ramaraja">
          Total
        </span>
        <span className="text-2xl font-normal text-black font-ramaraja">
          R$ {total.toFixed(2).replace(".", ",")}
        </span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full bg-blue-900 text-white py-4 px-8 rounded-3xl text-2xl font-normal hover:bg-blue-800 transition-colors duration-200 font-ramaraja"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        FINALIZAR COMPRA
      </button>
    </div>
  );
};

export default OrderSummary;
