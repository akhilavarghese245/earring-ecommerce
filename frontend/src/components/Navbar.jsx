import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className="font-mono font-extrabold text-purple-500">AM Fashion</h1>
        {/* You can use your own logo file in public folder */}
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 font-medium text-sm text-gray-800">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Icons */}
      <div className="flex gap-6 text-gray-700 text-xl items-center relative">
        <FaSearch className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
        </div>
      </div>
    </nav>
  );
}
