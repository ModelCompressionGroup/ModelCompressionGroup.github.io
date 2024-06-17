import React from 'react';

interface NewTagProps {
  text: string;
}

const NewTag: React.FC<NewTagProps> = ({ text }) => {
  return (
    <div className="relative flex items-center gap-2">
      <span className="block text-sm font-bold px-2 py-0.5 rounded-full text-white bg-info animate-pulse drop-shadow-lg dark:text-white">
        NEW
      </span>
      <span className="relative text-sm font-medium text-gray-700 flex gap-6 dark:text-white">
        {text}
        <div className="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
          <span className="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-950 -translate-x-2 transition duration-300 group-hover:translate-x-px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </span>
    </div>
  );
};

export default NewTag;
