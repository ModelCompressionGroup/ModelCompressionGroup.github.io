'use client';

const ScheduleDemoButton = () => {
    const scrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <button
        onClick={scrollToContact}
        className="inline-block min-w-[200px] px-8 py-3 font-medium text-primary bg-white border border-primary rounded-full hover:bg-primary hover:text-white"
      >
        Schedule a Demo
      </button>
    );
  };
  
  export default ScheduleDemoButton;
  