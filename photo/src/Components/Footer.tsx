import { Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-yellow-800 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand/Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">FlitsPixels</h2>
          <p className="text-gray-400">
            Capturing moments, telling stories — one photo at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 mb-2">Email: info@flitspixels.com</p>
          <p className="text-gray-400 mb-4">Phone: +123 456 7890</p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500 transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} FlitsPixels. All rights reserved.
      </div>
    </footer>
  );
}
