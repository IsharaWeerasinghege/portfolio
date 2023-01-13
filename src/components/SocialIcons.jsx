import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="flex flex-row justify-between items-center w-36 mx-auto md:mx-0 text-xl">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a href="https://www.facebook.com/suranga.ishara.1" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-all duration-500 ease-in-out"><FaFacebookSquare /></a>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,jsx-a11y/anchor-is-valid */}
      <a href="#" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-all duration-500 ease-in-out"><FaTwitterSquare /></a>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,jsx-a11y/anchor-is-valid */}
      <a href="#" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-all duration-500 ease-in-out"><FaInstagramSquare /></a>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a href="https://www.linkedin.com/in/suranga-ishara" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-all duration-500 ease-in-out"><FaLinkedin /></a>
    </div>
  );
}

export default SocialIcons;
