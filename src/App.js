import { NavLink, Route, Routes } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { About, Home, Portfolio, Service, Sidebar } from './components';
import Contact from './components/Contact';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="w-screen  h-screen overflow-hidden ">
      <div className="absolute flex justify-between px-8 py-3 items-center w-screen bg-neutral-600 z-50 sticky:mt-56 md:hidden ">
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-xl font-bold uppercase text-white transition-color duration-75 ease-in-out' : 'text-xl font-bold uppercase text-gray-300 transition-color duration-75 ease-in-out')}>
            Ishara
          </NavLink>
        </div>
        <div className="text-xl text-white cursor-pointer">
          <BiMenu onClick={() => setToggleMenu(!toggleMenu)} />
        </div>
      </div>
      <div className="bg-neutral-800 flex flex-row font-poppins">
        <div className="hidden md:flex h-screen bg-neutral-700 z-20">
          <Sidebar />
        </div>

        <div className="h-screen flex-1 pt-14 md:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {toggleMenu && (
        <div className="fixed h-screen bg-neutral-700 z-40 animate-slide-in w-4/5 md:hidden">
          <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
