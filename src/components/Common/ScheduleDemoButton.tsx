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
      className="inline-block min-w-[205px] px-8 py-2 font-medium text-white bg-primary border border-white rounded-full hover:bg-white hover:text-primary"
    >
      Schedule a Demo
    </button>
  );
};

export default ScheduleDemoButton;
