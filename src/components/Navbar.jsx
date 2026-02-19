import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    dropdown: [
      { label: "About Organization", href: "/about-organization" },
      { label: "Organization History", href: "/organization-history" },
      { label: "Corporate Profile", href: "/corporate-profile" },
      { label: "Chairman's Message ", href: "/message-from-chairman" },
      { label: "Who We Are", href: "/who-we-are" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Business Sector",
    dropdown: [
      { label: "Automobile", href: "/auto-mobile" },
      { label: "Real Estate Housing", href: "/real-estate" },
      { label: "Hospitality", href: "/hospitality" },
      { label: "Banking", href: "/banking" },
      { label: "Agriculture", href: "/agriculture" },
      { label: "Engineering", href: "/engineering" },
    ],
  },
  { label: "Blog / News", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export default function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Determine active item based on current path
  const getActiveItemFromPath = () => {
    const currentPath = location.pathname;
    
    for (const item of navItems) {
      if (item.href === currentPath) {
        return item.label;
      }
      if (item.dropdown) {
        const matchingSubItem = item.dropdown.find(sub => sub.href === currentPath);
        if (matchingSubItem) {
          return item.label;
        }
      }
    }
    return "Home";
  };

  const [activeItem, setActiveItem] = useState(getActiveItemFromPath());

  // Update active item when location changes and scroll to top
  useEffect(() => {
    setActiveItem(getActiveItemFromPath());
    setMobileOpen(false);
    setMobileDropdown(null);
    scrollToTop(); // Scroll to top on page change
  }, [location.pathname]);

  // Handle scroll effects
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for logo animation
      setScrolled(currentScrollY > 60);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
        setMobileOpen(false); // Close mobile menu when scrolling down
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Handle parent click for dropdown toggling
  const handleParentClick = (item) => {
    setActiveDropdown((prev) => (prev === item.label ? null : item.label));
  };

  // Handle navigation with scroll to top
  const handleNavigation = (e, item) => {
    if (location.pathname === item.href) {
      e.preventDefault();
      scrollToTop();
    }
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const activeDropdownItems = navItems.find((n) => n.label === activeDropdown)?.dropdown;
  
  // Calculate navbar height for spacer
  const getNavbarHeight = () => {
    if (window.innerWidth < 1024) { // mobile
      return 65; // height of mobile bar
    }
    return scrolled ? 57 : 131; // desktop height
  };

  const [navbarHeight, setNavbarHeight] = useState(131);

  // Update navbar height on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setNavbarHeight(65);
      } else {
        setNavbarHeight(scrolled ? 57 : 131);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrolled]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap');
        .nav-item-font { font-family: 'Jost', sans-serif; }

        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dropdown-bar { animation: dropIn 0.2s ease forwards; }

        .logo-wrap {
          display: grid;
          grid-template-rows: 1fr;
          transition: grid-template-rows 0.35s ease, opacity 0.3s ease;
          opacity: 1;
        }
        .logo-wrap.collapsed { grid-template-rows: 0fr; opacity: 0; }
        .logo-inner { overflow: hidden; }

        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#131f2f] transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? "shadow-2xl" : ""}`}>

        {/* Logo row - Completely hidden on mobile, shown on desktop */}
        <div className="hidden lg:block">
          <div className={`logo-wrap ${scrolled ? "collapsed" : ""}`}>
            <div className="logo-inner border-b border-white/[0.07]">
              <div className="flex justify-center items-center py-2">
                <Link to="/" onClick={(e) => handleNavigation(e, { label: "Home", href: "/" })}>
                  <img src="images/logo2.png" alt="Logo" className="h-16 w-auto object-contain" />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop nav row */}
          <div className="flex justify-center items-stretch border-b border-white/[0.07]">
            {navItems.map((item) => {
              const showUnderline = activeItem === item.label;
              const isOpen = activeDropdown === item.label;

              return (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleParentClick(item)}
                      className={`relative nav-item-font text-md tracking-[0.15em] uppercase px-8 py-4 flex items-center gap-1.5 transition-colors duration-200 ${
                        showUnderline || isOpen ? "text-[#c4a787]" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                      {showUnderline && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c4a787]" />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavigation(e, item)}
                      className={`relative nav-item-font text-md tracking-[0.15em] uppercase px-8 py-4 flex items-center transition-colors duration-200 ${
                        item.label === "Contact"
                          ? showUnderline ? "text-white" :  "text-white/70"
                          : showUnderline
                          ? "text-[#c4a787]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {showUnderline && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c4a787]" />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile bar - Only visible on mobile */}
        <div className="lg:hidden flex items-center justify-between px-6 py-2 border-b border-white/[0.07]">
          <Link to="/" onClick={(e) => handleNavigation(e, { label: "Home", href: "/" })}>
            <img src="images/logo2.png" alt="Logo" className="h-16 w-auto object-contain" />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/70 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

     {/* ── FULL-WIDTH DROPDOWN BAR - Desktop only ── */}
{activeDropdownItems && showNavbar && (
  <div
    className="fixed left-0 right-0 z-40 bg-[#e8d5bf] border-b border-black/10 dropdown-bar hidden lg:block"
    style={{ top: `${navbarHeight}px` }}
  >
    <div className="h-px bg-gradient-to-r from-transparent via-[#b89a74] to-transparent" />
    <div className="flex w-full">
      {activeDropdownItems.map((sub) => (
        <Link
          key={sub.label}
          to={sub.href}
          onClick={(e) => {
            handleNavigation(e, sub);
            setActiveDropdown(null);
          }}
          className="group relative flex-1 text-center nav-item-font text-[11px] tracking-[0.15em] uppercase text-[#3a2e22] hover:text-[#131f2f] py-4 px-4 transition-all duration-200 font-medium overflow-hidden"
        >
          {/* Hover overlay that expands from center */}
          <span className="absolute inset-0 bg-black/[0.05] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          
          {/* Content */}
          <span className="relative z-10">{sub.label}</span>
        </Link>
      ))}
    </div>
  </div>
)}

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-[#131f2f] flex flex-col"
          style={{ top: "65px" }}
        >
          <div className="flex flex-col flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/[0.07]">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                      }
                      className={`w-full flex items-center justify-between px-8 py-6 nav-item-font text-base tracking-[0.2em] uppercase transition-colors ${
                        activeItem === item.label ? "text-[#c4a787]" : "text-white/80 hover:text-[#c4a787]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileDropdown === item.label ? "rotate-180 text-[#c4a787]" : ""
                        }`}
                      />
                    </button>
                    {mobileDropdown === item.label && (
                      <div className="bg-[#e8d5bf] flex flex-col">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={(e) => {
                              handleNavigation(e, sub);
                              setMobileOpen(false);
                              setMobileDropdown(null);
                              setActiveDropdown(null);
                            }}
                            className="px-10 py-4 nav-item-font text-sm tracking-[0.15em] uppercase text-[#3a2e22] hover:text-[#131f2f] hover:bg-black/[0.05] transition-colors border-b border-black/[0.06]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      handleNavigation(e, item);
                      setMobileOpen(false);
                      setMobileDropdown(null);
                      setActiveDropdown(null);
                    }}
                    className={`flex items-center px-8 py-6 nav-item-font text-base tracking-[0.2em] uppercase transition-colors ${
                      item.label === "Contact"
                        ? "text-[#c4a787] hover:text-white"
                        : activeItem === item.label
                        ? "text-[#c4a787]"
                        : "text-white/80 hover:text-[#c4a787]"
                    }`}
                  >
                    {item.label}
                    {activeItem === item.label && item.label !== "Contact" && (
                      <span className="ml-3 w-6 h-px bg-[#c4a787]" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spacer */}
      <div style={{ height: `${navbarHeight}px`, transition: "height 0.35s ease" }} />
    </>
  );
}