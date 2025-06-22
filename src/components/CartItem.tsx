import React from "react";
import Image from "next/image";

interface CartItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  size: string;
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  size,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-lg mb-4">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          width={283}
          height={283}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-2xl font-normal text-black font-ramaraja">
            {name}
          </h3>
          <p className="text-base text-gray-600 mt-2 font-ramaraja">
            {description}
          </p>
        </div>

        {/* Size and Quantity Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xl font-normal text-black font-ramaraja">
              Tamanho: {size}
            </span>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg font-bold"
              >
                -
              </button>
              <span className="text-lg font-normal px-3 font-ramaraja">
                QNT: {quantity}
              </span>
              <button
                onClick={() => onQuantityChange(id, quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Price and Remove Button */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-normal text-black font-ramaraja">
              R$ {price.toFixed(2).replace(".", ",")}
            </span>
            <button
              onClick={() => onRemove(id)}
              className="w-6 h-6 hover:opacity-70 transition-opacity"
            >
              <Image
                src="/images/delete-icon.png"
                alt="Remover item"
                width={22}
                height={22}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
