import React from "react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="flex justify-between items-center py-8">
      {onMenuClick && (
        <button onClick={onMenuClick} className="space-y-2 hover:cursor-pointer">
          <div className="w-16 h-3 bg-black rounded-sm"></div>
          <div className="w-16 h-3 bg-black rounded-sm"></div>
          <div className="w-16 h-3 bg-black rounded-sm"></div>
        </button>
      )}
      <div className="text-center flex-grow">
        <h1 className="text-6xl font-normal text-black mb-4 font-sedan-sc">
          HypeWear
        </h1>
        <div className="w-full h-px bg-black"></div>
      </div>
      {onMenuClick && <div className="w-16"></div>} {/* Placeholder to balance the header */}
    </div>
  );
};

export default Header;
