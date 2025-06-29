
'use client';

import { useState } from 'react';
import Image from 'next/image';

export function ImageUpload() {
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = files.map(file => URL.createObjectURL(file));
      setImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  return (
    <div className="bg-[#B2C1E6] bg-opacity-60 rounded-lg p-4 flex flex-col gap-4">
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-32">
            <Image src={image} alt={`upload preview ${index}`} layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center h-32 border-2 border-dashed border-gray-400 rounded-lg">
        <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-2 text-gray-600">
          <Image src="/images/upload-icon.png" alt="Upload icon" width={32} height={32} />
          <span className="font-ramaraja text-xl">Upload imagem</span>
        </label>
        <input id="image-upload" type="file" multiple accept="image/*" className="hidden" onChange={handleImageChange} />
      </div>
    </div>
  );
}
