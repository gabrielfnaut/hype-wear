import React from "react";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize?: string;
  onSizeSelect: (size: string) => void;
  className?: string;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSizeSelect,
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xl font-normal text-black mb-3 font-ramaraja">
        Tamanho:
      </span>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`
              w-16 h-8 rounded-md border text-lg font-normal font-ramaraja
              ${
                selectedSize === size
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-blue-900 text-white border-gray-300 hover:bg-blue-800"
              }
              transition-colors duration-200 shadow-lg
            `}
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
