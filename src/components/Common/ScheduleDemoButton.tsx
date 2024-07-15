'use client';

import { useEffect } from 'react';

const ScheduleDemoButton = () => {
  const handleClick = () => {
    if (window.location.pathname !== '/') {
      // Redirect to the /company/contact page instead of adding a query parameter
      window.location.href = '/company/contact';
    } else {
      // Scroll to the contact section if on the home page
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Check for scrollTo parameter when the component mounts
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
      className="inline-block min-w-[205px] px-8 py-2 font-medium text-white bg-primary border border-white rounded-full hover:bg-white hover:text-primary hover:border-primary"
    >
      Request a Demo
    </button>
  );
};

export default ScheduleDemoButton;
