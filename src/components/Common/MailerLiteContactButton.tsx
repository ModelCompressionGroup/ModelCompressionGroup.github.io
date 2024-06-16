'use client'

import { useEffect } from 'react';

const MailerLiteButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.mailerlite.com/js/universal.js';
    script.async = true;
    script.onload = () => {
      // Use type assertion to ignore TypeScript errors
      (window as any).ml && (window as any).ml('account', '968160'); // Your actual account ID
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleMailerLiteForm = () => {
    // Use type assertion to ignore TypeScript errors
    if ((window as any).ml) {
      (window as any).ml('show', 'yOBMrV', true); // Replace 'yOBMrV' with your form ID
    }
  };

  return (
    <button
      onClick={handleMailerLiteForm}
      className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
    >
      <span className="relative text-base font-semibold text-white">Contact Us</span>
    </button>
  );
};

export default MailerLiteButton;
