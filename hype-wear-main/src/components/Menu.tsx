
'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="space-y-2 hover:cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="w-16 h-3 bg-black rounded-sm"></div>
        <div className="w-16 h-3 bg-black rounded-sm"></div>
        <div className="w-16 h-3 bg-black rounded-sm"></div>
      </div>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
