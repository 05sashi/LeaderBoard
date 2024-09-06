import React from 'react'
import {FaChevronLeft} from "react-icons/fa";
import Fourdot from '../assets/Fourdot'
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-[#E7F0FE] p-2">
      <div className="px-3 flex items-center">
      <FaChevronLeft aria-hidden="true" className='text-2xl'/>
      </div>
      <div className="text-center flex-grow">
        <span className="font-semibold text-2xl">Leaderboard</span>
      </div>
      <div className="flex items-center px-3">
        <Fourdot></Fourdot>
      </div>
    </div>
    </div>
  )
}

export default Navbar
