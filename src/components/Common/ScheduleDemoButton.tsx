'use client';

import { useEffect } from 'react';

const ScheduleDemoButton = () => {
  const handleClick = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/?scrollTo=contact';
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('scrollTo') === 'contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <button
      onClick={handleClick}
      className="inline-block min-w-[230px] px-8 py-3 font-medium text-primary bg-white border border-primary rounded-full hover:bg-primary hover:text-white"
    >
      Schedule a Demo
    </button>
  );
};

export default ScheduleDemoButton;
