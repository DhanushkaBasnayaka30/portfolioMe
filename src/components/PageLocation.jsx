import React from 'react';

export default function PageLocation({ currentIndex, section }) {
  return (
    <div className='w-full fixed z- h-full bottom-0 z-50 bg-transparent border-black p-4 flex justify-end'>
      <div className='w-20 h-full border-black flex flex-col gap-y-8 justify-end items-end'>
        {section.map((item, index) => (
          <div
            key={index}
            className={`w-4 h-4 border-2 rotate-45 ${
              index === currentIndex ? 'bg-green-500 border-green-700' : 'border-green-800'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
