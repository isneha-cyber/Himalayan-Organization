import { MailIcon, PhoneCall, Menu, X, ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close mobile menu and scroll to top when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      // Don't hide navbar when mobile menu is open
      if (isMenuOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // At the very top - show both top bar and navbar
        setShowTopBar(true);
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show ONLY navbar, hide top bar
        setShowTopBar(false);
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide both
        setShowTopBar(false);
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isMenuOpen]);

  // Handle link click to close mobile menu and scroll to top
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Top Bar - Only visible at very top of page */}
      <div className={`bg-[#131f2f] text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showTopBar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto flex justify-end items-center gap-6 text-sm">
          <div className="flex items-center sm:gap-2">
            <a href="tel:+9770615238848" className="flex items-center gap-2">
              <PhoneCall className="text-[#c4a787] w-4 h-4" />
              <span className="inline text-[10px] lg:text-sm">+977 061-523848</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:info@grouphimalaya.com" className="flex items-center gap-2">
              <MailIcon className="text-[#c4a787] w-4 h-4" />
              <span className="inline text-[10px] lg:text-sm">info@grouphimalaya.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white border-b border-gray-200 fixed left-0 right-0 z-40 transition-all duration-300 ${
        showTopBar ? 'top-[40px]' : 'top-0 shadow-md'
      } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={handleLinkClick}>
                <img 
                  src="/images/logo2.png" 
                  alt="Company Logo" 
                  className="sm:h-20 h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-4 text-sm font-medium uppercase">
              {/* About Us Dropdown */}
              <li className="relative group uppercase">
                <button className="flex items-center gap-1 uppercase text-gray-700 hover:text-[#c4a787] transition-colors duration-200">
                  About Us
                  <ChevronDown className="w-4 h-4" />
                </button>
                <ul className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  <li><Link to="/about-organization" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">About The Organization</Link></li>
                  <li><Link to="/organization-history" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Organization History</Link></li>
                  <li><Link to="/corporate-profile" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Corporate Profile</Link></li>
                  <li><Link to="/message-from-chairman" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Message From the Chairman</Link></li>
                  <li><Link to="/who-we-are" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Who We Are</Link></li>
                  <li><Link to="/how-we-work" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">How We Work</Link></li>
                  <li><Link to="/faq" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">FAQ</Link></li>
                </ul>
              </li>

              {/* Business Sector Dropdown */}
              <li className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-[#c4a787] transition-colors duration-200 uppercase">
                  Business Sector
                  <ChevronDown className="w-4 h-4" />
                </button>
                <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  <li><Link to="/auto-mobile" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Automobile</Link></li>
                  <li><Link to="/real-estate" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Real Estate Housing</Link></li>
                  <li><Link to="/hospitality" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Hospitality</Link></li>
                  <li><Link to="/banking" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Banking</Link></li>
                  <li><Link to="/agriculture" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Agriculture</Link></li>
                  <li><Link to="/engineering" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#c4a787] transition-colors">Engineering</Link></li>
                </ul>
              </li>

              <li>
                <Link to="/blog" className="text-gray-700 hover:text-[#c4a787] transition-colors duration-200">
                  Blog/News
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-700 hover:text-[#c4a787] transition-colors duration-200">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact" className="bg-[#c4a787] text-white px-4 py-2 rounded-full hover:bg-[#b39676] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#c4a787] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Width Overlay */}
      {isMenuOpen && (
        <div className={`lg:hidden fixed inset-0 z-30 bg-white transition-all duration-300 ${
          showTopBar ? 'top-[100px]' : 'top-[80px]'
        }`}>
          <div className="h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/" 
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-700 hover:text-[#c4a787] transition-colors uppercase text-sm font-medium"
                  >
                    Home
                  </Link>
                </li>

                {/* Mobile About Us Dropdown */}
                <li>
                  <button
                    onClick={() => toggleDropdown('about')}
                    className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-[#c4a787] transition-colors uppercase text-sm font-medium"
                  >
                    About Us
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'about' && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li><Link to="/about-organization" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">About The Organization</Link></li>
                      <li><Link to="/organization-history" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Organization History</Link></li>
                      <li><Link to="/corporate-profile" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Corporate Profile</Link></li>
                      <li><Link to="/message-from-chairman" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Message From the Chairman</Link></li>
                      <li><Link to="/who-we-are" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Who We Are</Link></li>
                      <li><Link to="/how-we-work" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">How We Work</Link></li>
                      <li><Link to="/faq" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">FAQ</Link></li>
                    </ul>
                  )}
                </li>

                {/* Mobile Business Sector Dropdown */}
                <li>
                  <button
                    onClick={() => toggleDropdown('business')}
                    className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-[#c4a787] transition-colors uppercase text-sm font-medium"
                  >
                    Business Sector
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'business' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'business' && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li><Link to="/auto-mobile" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Automobile</Link></li>
                      <li><Link to="/real-estate" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Real Estate Housing</Link></li>
                      <li><Link to="/hospitality" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Hospitality</Link></li>
                      <li><Link to="/banking" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Banking</Link></li>
                      <li><Link to="/agriculture" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Agriculture</Link></li>
                      <li><Link to="/engineering" onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-[#c4a787] text-sm">Engineering</Link></li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link 
                    to="/blog" 
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-700 hover:text-[#c4a787] transition-colors uppercase text-sm font-medium"
                  >
                    Blog/News
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/career" 
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-700 hover:text-[#c4a787] transition-colors uppercase text-sm font-medium"
                  >
                    Career
                  </Link>
                </li>
               
                <li>
                  <Link 
                    to="/contact" 
                    onClick={handleLinkClick}
                    className="block w-full text-center bg-[#c4a787] text-white px-6 py-2 rounded-md hover:bg-[#b39676] transition-colors uppercase text-sm font-medium mt-4"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content jump */}
      <div className="h-20 sm:h-[120px]"></div>
    </>
  );
};

export default Navbar;