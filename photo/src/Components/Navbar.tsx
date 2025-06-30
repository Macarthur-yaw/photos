import { useState } from 'react';
import { Navitems } from "../Constant/NavItems";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent text-white">
      <div className="w-full mx-auto px-6  bg-black/20 py-4 flex items-center justify-between">
      
        <div className="text-lg font-bold tracking-widest">
          <Link to ="/">FlitsPixels</Link>
        </div>

        
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          {Navitems.map((item, index) => (
            <a
              key={index}
              
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <Link to={item.link}>
              
              {item.title}
              </Link>
            </a>
          ))}
        </div>

       
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
        <div className="md:hidden bg-yellow-800 bg-opacity-95 backdrop-blur-2xl text-white px-6 py-4 space-y-4">
          {Navitems.map((item, index) => (
            <a
              key={index}
            
              className="block text-gray-300 hover:text-white transition duration-300"
              onClick={() => setMobileOpen(false)} // close menu on click
            >
              <Link to={item.link}>
              {item.title}
              </Link>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
