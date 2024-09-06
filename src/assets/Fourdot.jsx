import React from 'react';

const Fourdot = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="3.5" fill="#000000" />
        <circle cx="18" cy="6" r="3.5" fill="#000000" />
        <circle cx="6" cy="18" r="3.5" fill="#000000" />
        <circle cx="18" cy="18" r="3.5" fill="#000000" />
      </svg>
    </div>
  );
};

export default Fourdot;
