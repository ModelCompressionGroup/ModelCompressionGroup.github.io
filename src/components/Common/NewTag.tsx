import Link from 'next/link';
import React from 'react';

interface NewTagProps {
  text: string;
  href: string; // Additional prop for the link URL
}

const NewTag: React.FC<NewTagProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="relative flex items-center justify-center gap-2 bg-gray-800 bg-opacity-20 hover:bg-opacity-30 rounded-full px-4 py-1 transition duration-300 ease-in-out"
    >
      <span className="text-sm font-bold text-primary animate-pulse">
        NEW
      </span>
      <span className="text-sm font-medium text-white">
        {text}
      </span>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 ml-2 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
};

export default NewTag;
