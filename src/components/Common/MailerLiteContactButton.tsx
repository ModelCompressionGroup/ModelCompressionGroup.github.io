'use client';

import { useEffect } from 'react';

const MailerLiteButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.mailerlite.com/js/universal.js';
    script.async = true;
    script.onload = () => {
      (window as any).ml && (window as any).ml('account', '968160'); // Your actual account ID
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleMailerLiteForm = () => {
    if ((window as any).ml) {
      (window as any).ml('show', 'yOBMrV', true); // Replace 'yOBMrV' with your form ID
    }
  };

  return (
    <button
      onClick={handleMailerLiteForm}
      className="inline-block min-w-[200px] px-8 py-3 font-medium text-primary bg-white border border-primary rounded-full hover:bg-primary hover:text-white"
    >
      Contact Us
    </button>
  );
};

export default MailerLiteButton;

