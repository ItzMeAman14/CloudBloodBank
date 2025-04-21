import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const navBg = "bg-white shadow-md";
const logoColor = "text-[#ea384c] font-extrabold";
const button =
  "px-4 py-2 rounded-lg font-semibold transition-colors";
const redBtn = button + " bg-[#ea384c] text-white hover:bg-red-600";
const outlineBtn =
  button + " bg-white text-[#ea384c] border border-[#ea384c] hover:bg-[#ea384c] hover:text-white";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className={`${navBg} w-full z-50`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Left - Logo/Heading */}
        <Link
          to="/"
          className={`text-2xl sm:text-3xl select-none ${logoColor} tracking-tight`}
        >
          Donor Bridge
        </Link>
        {/* Right - Nav */}
        <div className="hidden sm:flex space-x-4 items-center">
          <Link to="/about" className="text-[#ea384c] font-semibold hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="text-[#ea384c] font-semibold hover:underline">
            Contact Us
          </Link>
          <Link to="/login" className={outlineBtn}>
            Login
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdown((d) => !d)}
              className={redBtn + " flex items-center gap-2"}
            >
              Signup
              <svg width="16" height="16" fill="currentColor" className="inline">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdown && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg z-50"
                style={{ minWidth: "170px" }}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link
                  to="/register/donor"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#ea384c]/10"
                  onClick={() => setDropdown(false)}
                >
                  Register as Donor
                </Link>
                <Link
                  to="/register/bloodbank"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#ea384c]/10"
                  onClick={() => setDropdown(false)}
                >
                  Register as Blood Bank
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button className="sm:hidden" onClick={() => setMobileMenu((m) => !m)}>
          <Menu size={28} color="#ea384c" />
        </button>
      </div>
      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="sm:hidden bg-white shadow-md border-t border-gray-100">
          <Link to="/about" className="block px-6 py-4 text-[#ea384c] font-semibold" onClick={() => setMobileMenu(false)}>
            About Us
          </Link>
          <Link to="/contact" className="block px-6 py-4 text-[#ea384c] font-semibold" onClick={() => setMobileMenu(false)}>
            Contact Us
          </Link>
          <Link to="/login" className="block px-6 py-4 text-[#ea384c] font-semibold" onClick={() => setMobileMenu(false)}>
            Login
          </Link>
          <div className="border-t border-gray-100" />
          <div className="relative">
            <button
              className="w-full text-left px-6 py-4 font-semibold text-[#ea384c] focus:outline-none"
              onClick={() => setDropdown((d) => !d)}
            >
              Signup
              <svg width="16" height="16" fill="currentColor" className="inline ml-2">
                <path d="M4 6l4 4 4-4" stroke="#ea384c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdown && (
              <div className="bg-white border-t border-gray-100 flex flex-col">
                <Link
                  to="/register/donor"
                  className="px-8 py-3 text-gray-700 hover:bg-[#ea384c]/10"
                  onClick={() => { setDropdown(false); setMobileMenu(false); }}
                >
                  Register as Donor
                </Link>
                <Link
                  to="/register/bloodbank"
                  className="px-8 py-3 text-gray-700 hover:bg-[#ea384c]/10"
                  onClick={() => { setDropdown(false); setMobileMenu(false); }}
                >
                  Register as Blood Bank
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}