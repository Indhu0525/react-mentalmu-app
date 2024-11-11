import React, { useState } from 'react';
import headerimg from './assets/headericon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Science', href: '#', current: true },
    { name: 'Benefit', href: '#', current: false },
    { name: 'Pricing', href: '#', current: false },
    { name: 'Product', href: '#', current: false },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 ">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={headerimg} className="h-8" alt="Header Icon"/>
            <span className="self-center text-2xl font-semibold ">
              Flowbite
            </span>
          </a>
          <div class="flex justify-between items-center gap-12">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-black font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Sign In
            </button>
            
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
              onClick={toggleMenu}
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:w-auto md:order-1">
            <ul className="flex flex-row font-medium md:p-0 md:space-x-8 rtl:space-x-reverse">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 md:p-0 `}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="navbar-cta"
      >
        <ul className="flex flex-col font-medium p-4 border rounded-lg">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`block py-2 px-3 rounded ${
                  item.current
                    ? 'text-white bg-black hover:bg-gray-100 hover:text-black'
                    : 'text-gray-900 hover:bg-black hover:text-white '
                }`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;