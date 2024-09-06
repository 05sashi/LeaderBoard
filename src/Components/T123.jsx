import React from 'react';
import firstt from '../../public/Images/1.png';

const T123 = () => {
  const person = [
    { rank: 3, name: 'Jackson', score: 1847, image: firstt, bgColor: '#4A5C86' },
    { rank: 1, name: 'Eiden', score: 2430, image: firstt, crown: true, bgColor: '#314577' },
    { rank: 2, name: 'Emma Aria', score: 1674, image: firstt, bgColor: '#4A5C86' },
  ];

  return (
    <div className="flex justify-center items-end space-x-2 sm:space-x-4 bg-[#E6EDF7] p-4 sm:p-6 rounded-lg my-20">
      {person.map((player, index) => (
        <div key={player.rank} className={`flex flex-col items-center ${index === 1 ? 'mb-4 sm:mb-8' : 'mb-0'}`}>
          <div className="relative">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 ${index === 1 ? 'w-20 h-20 sm:w-28 sm:h-28' : ''} bg-cover rounded-full border-4 border-white`}
              style={{ backgroundImage: `url(${player.image})` }}
            />
            {player.crown && (
              <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2">
                <span role="img" aria-label="crown" className="text-3xl sm:text-4xl">
                  👑
                </span>
              </div>
            )}
            <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[${player.bgColor}] text-black rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-lg font-bold`}>
              {player.rank}
            </div>
          </div>
          <div className={`bg-[#3B5987] text-white text-center p-2 sm:p-3 rounded-lg w-24 sm:w-28 ${index === 1 ? 'w-28 sm:w-36' : ''} mt-4`}>
            <div className={`text-sm sm:text-lg ${index === 1 ? 'text-lg sm:text-xl' : ''} font-bold`}>{player.name}</div>
            <div className={`text-xs sm:text-base ${index === 1 ? 'text-base sm:text-lg font-bold' : ''}`}>{player.score}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default T123;
