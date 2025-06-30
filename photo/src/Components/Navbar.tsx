import { useState } from 'react';
import { Navitems } from "../Constant/NavItems";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold tracking-widest">
          FlitsPixels
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          {Navitems.map((item, index) => (
            <a
              key={index}
              
              className="text-gray-300 hover:text-white transition duration-300"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {mobileOpen ? (
            <CloseIcon
              fontSize="medium"
              className="cursor-pointer"
              onClick={() => setMobileOpen(false)}
            />
          ) : (
            <MenuSharpIcon
              fontSize="medium"
              className="cursor-pointer"
              onClick={() => setMobileOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm text-white px-6 py-4 space-y-4">
          {Navitems.map((item, index) => (
            <a
              key={index}
             
              className="block text-gray-300 hover:text-white transition duration-300"
              onClick={() => setMobileOpen(false)} // close menu on click
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
