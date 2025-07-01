import React, { useState } from "react";

interface ShippingCalculatorProps {
  onCalculate: (cep: string) => void;
  className?: string;
}

const ShippingCalculator: React.FC<ShippingCalculatorProps> = ({
  onCalculate,
  className = "",
}) => {
  const [cep, setCep] = useState("");

  const handleCalculate = () => {
    if (cep.trim()) {
      onCalculate(cep);
    }
  };

  const formatCep = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Apply CEP mask (00000-000)
    if (numericValue.length <= 5) {
      return numericValue;
    } else {
      return `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`;
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCep = formatCep(e.target.value);
    setCep(formattedCep);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-xl font-normal text-black font-ramaraja">
        Dados de entrega:
      </h3>

      <div className="flex gap-3 items-center">
        <div className="relative">
          <input
            type="text"
            value={cep}
            onChange={handleCepChange}
            // placeholder="00000-000"
            maxLength={9}
            className="w-52 h-8 px-3 border-2 border-black rounded-2xl text-base font-normal bg-white focus:outline-none focus:border-blue-600 font-ramaraja"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base font-normal text-black pointer-events-none">
            CEP:
          </span>
        </div>

        <button
          onClick={handleCalculate}
          className="h-8 px-4 bg-white border-2 border-black rounded-2xl text-sm font-normal text-black hover:bg-gray-50 transition-colors duration-200 font-ramaraja"
        >
          CALCULAR
        </button>
      </div>
    </div>
  );
};

export default ShippingCalculator;
