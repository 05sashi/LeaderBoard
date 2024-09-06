import React from 'react';
import Navbar from './Components/Navbar';
import Butns from './Components/Butns';
import Oranks from './Components/Oranks';
import T123 from './Components/T123';

const Leader = () => {
  return (
    <div className="min-h-screen bg-[#E7F0FE]">
      <Navbar />
      <Butns />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2">
            <T123 />
          </div>
          <div className="w-full lg:w-1/2">
            <Oranks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;