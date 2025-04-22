
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const navBg = "bg-white shadow-md";
const logoColor = "text-[#ea384c] font-extrabold";
const button = "px-4 py-2 rounded-lg font-semibold transition-colors";
const redBtn = button + " bg-[#ea384c] text-white hover:bg-red-600";

export default function UserNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className={`${navBg} w-full z-50`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link
          to="/"
          className={`text-2xl sm:text-3xl select-none ${logoColor} tracking-tight`}
        >
          Donor Bridge
        </Link>
        <div className="hidden sm:flex space-x-4 items-center">
          <Link to="/donate-blood" className={redBtn}>
            Donate Blood
          </Link>
          <Link to="/find-blood" className={redBtn}>
            Find Blood
          </Link>
          <Link to="/about" className="text-[#ea384c] font-semibold hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="text-[#ea384c] font-semibold hover:underline">
            Contact Us
          </Link>
        </div>
        <button className="sm:hidden" onClick={() => setMobileMenu((m) => !m)}>
          <Menu size={28} color="#ea384c" />
        </button>
      </div>
      {mobileMenu && (
        <div className="sm:hidden bg-white shadow-md border-t border-gray-100">
          <Link to="/donate-blood" className="block px-6 py-4 text-[#ea384c] font-semibold" onClick={() => setMobileMenu(false)}>
            Donate Blood
          </Link>
          <Link to="/find-blood" className="block px-6 py-4 text-[#ea384c] font-semibold" onClick={() => setMobileMenu(false)}>
            Find Blood
          </Link>
          <Link to="/about" className="block px-6 py-4 text-[#ea384c] font-semibold" onClick={() => setMobileMenu(false)}>
            About Us
          </Link>
          <Link to="/contact" className="block px-6 py-4 text-[#ea384c] font-semibold" onClick={() => setMobileMenu(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
