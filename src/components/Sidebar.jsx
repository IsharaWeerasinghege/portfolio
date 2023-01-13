import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ setToggleMenu }) {
  const isNotActiveStyle = 'min-w-[210px] capitalise py-2 hover:text-gray-300 transition-all duration-200';
  const isActiveStyle = 'min-w-[210px] capitalise py-2 font-bold hover:text-gray-300 transition-all duration-200';

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full text-white p-10">
      <h1 className="w-[210px] text-3xl font-black uppercase mb-8">Ishara</h1>
      <div className="flex flex-col items-center justify-center mb-8">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={() => setToggleMenu(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="min-w-[210px] text-gray-300">
        @ 2023 Ishara
        <br />
        Created by Ishara
      </div>
    </div>
  );
}

export default Sidebar;
