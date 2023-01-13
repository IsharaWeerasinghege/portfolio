import React from 'react';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex flex-row justify-between items-center w-36 mx-auto md:mx-0 text-xl">
        <a href="#" target="_blank" className="hover:text-gray-400 transition-all duration-500 ease-in-out"><FaFacebookSquare /></a>
        <a href="#" target="_blank" className="hover:text-gray-400 transition-all duration-500 ease-in-out"><FaTwitterSquare /></a>
        <a href="#" target="_blank" className="hover:text-gray-400 transition-all duration-500 ease-in-out"><FaInstagramSquare /></a>
        <a href="#" target="_blank" className="hover:text-gray-400 transition-all duration-500 ease-in-out"><FaLinkedin /></a>
    </div>
  )
}

export default SocialIcons