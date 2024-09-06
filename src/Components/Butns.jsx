import React, { useState } from 'react';

const Butns = () => {
  const [selected, setSelected] = useState('Organisation');

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg px-4 p-1 flex space-x-8">
        <button
          onClick={() => setSelected('Organisation')}
          className={`px-4 py-2 relative ${selected === 'Organisation' ? 'text-[#000000]' : 'text-gray-500'}
          transition-all duration-300 ease-in-out hover:text-[#000000]`}
        >
          Organisation
          {selected === 'Organisation' && (
            <span
              className="absolute bottom-0 left-1/4 right-1/4 border-b-2 border-[#3B5987]
              transition-all duration-300 ease-in-out transform scale-x-100"
            />
          )}
        </button>

        <button
          onClick={() => setSelected('Department')}
          className={`px-4 py-2 relative ${selected === 'Department' ? 'text-[#000000]' : 'text-gray-500'}
          transition-all duration-300 ease-in-out hover:text-[#000000]`}
        >
          Department
          {selected === 'Department' && (
            <span
              className="absolute bottom-0 left-1/4 right-1/4 border-b-2 border-[#3B5987]
              transition-all duration-300 ease-in-out transform scale-x-100"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Butns;
