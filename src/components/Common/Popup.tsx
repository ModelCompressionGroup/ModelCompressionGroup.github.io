'use client'

import { useState } from 'react';
import Image from 'next/image';

const Popup = ({ triggerText, title, imageSrc, imageAlt, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="text-center">
      <span
        onClick={handleOpen}
        className="text-primary-500 underline cursor-pointer hover:text-info-700"
      >
        {triggerText}
      </span>

      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent click inside popup from closing it
            className="relative bg-white p-6 rounded-lg max-w-4xl w-full text-left"
          >
            <span
              onClick={handleClose}
              className="absolute top-2 right-2 text-sm text-gray-500 cursor-pointer hover:text-gray-700"
            >
              Close
            </span>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="mb-6">{children}</div>
            {imageSrc && (
              <div className="relative w-full h-64">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
