import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full shadow-sm h-24">

      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-full">

        <div className="flex items-center justify-between w-full gap-2 sm:gap-4 h-full">

          {/* Logo - Much Larger and More Visible */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://i.tracxn.com/logo/company/3bdd50c45ce07348a48548d6145c3dc9?format=webp&height=120&width=120"
              alt="NEXUSIT Logo"
              className="h-12 sm:h-18 md:h-20 lg:h-15 w-[8rem] object-contain rounded-lg"
            />

          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
            <li>
              <a
                href="#services"
                onClick={(e) => handleNavigation(e, '#services')}
                className="text-xs xl:text-sm text-gray-700 hover:text-orange-500 font-semibold transition-colors whitespace-nowrap"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavigation(e, '#about')}
                className="text-xs xl:text-sm text-gray-700 hover:text-orange-500 font-semibold transition-colors whitespace-nowrap"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                onClick={(e) => handleNavigation(e, '#technologies')}
                className="text-xs xl:text-sm text-gray-700 hover:text-orange-500 font-semibold transition-colors whitespace-nowrap"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavigation(e, '#contact')}
                className="text-xs xl:text-sm text-gray-700 hover:text-orange-500 font-semibold transition-colors whitespace-nowrap"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Button - Desktop only */}
          <button
            onClick={(e) => handleNavigation(e, '#contact')}
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-3 xl:px-5 py-1.5 xl:py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all shadow-lg hover:shadow-xl flex-shrink-0 whitespace-nowrap"
          >
            Get a Quote
          </button>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg bg-white hover:bg-gray-100 flex-shrink-0 transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 w-full animate-slide-down bg-white shadow-md rounded-lg relative z-40">
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavigation(e, '#services')}
                  className="block text-gray-700 hover:text-orange-500 hover:bg-orange-50 font-medium transition-all py-2.5 px-3 rounded-lg"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavigation(e, '#about')}
                  className="block text-gray-700 hover:text-orange-500 hover:bg-orange-50 font-medium transition-all py-2.5 px-3 rounded-lg"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  onClick={(e) => handleNavigation(e, '#technologies')}
                  className="block text-gray-700 hover:text-orange-500 hover:bg-orange-50 font-medium transition-all py-2.5 px-3 rounded-lg"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavigation(e, '#contact')}
                  className="block text-gray-700 hover:text-orange-500 hover:bg-orange-50 font-medium transition-all py-2.5 px-3 rounded-lg"
                >
                  Contact
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={(e) => handleNavigation(e, '#contact')}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-medium transition-all text-sm shadow-lg hover:shadow-xl"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;