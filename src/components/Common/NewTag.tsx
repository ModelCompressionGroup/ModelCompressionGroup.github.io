import Link from 'next/link';
import React from 'react';

interface NewTagProps {
  text: string;
  href: string;
}

const NewTag: React.FC<NewTagProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center justify-center gap-2 bg-gray-800 bg-opacity-20 hover:bg-opacity-30 rounded-full px-4 py-1 transition duration-300 ease-in-out"
    >
      <span className="text-sm font-bold text-primary animate-pulse">
        NEW
      </span>
      <span className="text-sm font-light text-primary">
        {text}
      </span>
      <span className="text-primary text-lg">🚀</span>
    </Link>
  );
};

export default NewTag;
