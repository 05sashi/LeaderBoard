import React, { useState } from 'react';

const Oranks = () => {
  const [sortMethod, setSortMethod] = useState('rank');

  const otherRanks = [
    { rank: 4, name: 'Sebastian', score: 1124 },
    { rank: 5, name: 'Jason', score: 875, trend: 'down' },
    { rank: 6, name: 'Natalie', score: 774, trend: 'up' },
    { rank: 7, name: 'Serenity', score: 723, trend: 'up' },
    { rank: 8, name: 'Hannah', score: 559, trend: 'down' },
  ];

  const sortedRanks = [...otherRanks].sort((a, b) => {
    if (sortMethod === 'name') return a.name.localeCompare(b.name);
    if (sortMethod === 'score') return b.score - a.score;
    return 0;
  });

  return (
    <div className="bg-[#3B5987] rounded-3xl py-6 sm:py-8 px-4 sm:px-6 w-full max-w-md mx-auto">
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:justify-between items-center">
        <label className="text-white mb-2 sm:mb-0 sm:mr-4">Sort by:</label>
        <select
          value={sortMethod}
          onChange={(e) => setSortMethod(e.target.value)}
          className="w-full sm:w-auto p-2 rounded-md bg-white text-black"
        >
          <option value="score">Score</option>
          <option value="name">Name</option>
        </select>
      </div>

      {sortedRanks.map((player) => (
        <div
          key={player.rank}
          className="flex items-center justify-between text-white mb-3 py-2 border-b border-gray-300 last:border-b-0"
        >
          <div className="flex items-center">
            <span className="mr-3 font-bold text-base sm:text-lg">#{player.rank}</span>
            <span className="text-sm sm:text-base">{player.name}</span>
          </div>

          <div className="flex items-center">
            <span className="mr-2 text-base sm:text-lg">{player.score}</span>
            {player.trend === 'up' && (
              <span className="text-green-400 text-sm sm:text-base">▲</span>
            )}
            {player.trend === 'down' && (
              <span className="text-red-400 text-sm sm:text-base">▼</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Oranks;