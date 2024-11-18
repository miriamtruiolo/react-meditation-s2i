import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-col justify-between items-center bg-offWhite p-3 lg:px-8 z-50 shadow-md">
      <div className="flex flex-row justify-between items-center w-full">
        {/* Header principale */}
        <div className="flex justify-between items-center w-full">
          <img src="/images/logo.png" alt="Logo" className="h-20" />
          <button
            onClick={handleToggle}
            className="lg:hidden text-primary text-2xl focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen? <IoCloseOutline/>:<RxHamburgerMenu/>}
          </button>
        </div>

        {/* Link di navigazione */}
        <ul className="hidden lg:flex space-x-4 mt-2">
          <li>
            <a
              href="/"
              className="text-mainBlack font-semibold hover:text-lightPink transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/timer"
              className="text-mainBlack font-semibold hover:text-lightPink transition"
            >
              Timer
            </a>
          </li>
        </ul>
      </div>

      {/* Menu mobile */}
      <div className="lg:hidden mt-4 transition-[height] overflow-hidden">
        {isOpen ? (
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="block text-center text-mainBlack font-semibold hover:text-lightPink transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/timer"
                className="block text-center text-mainBlack font-semibold hover:text-lightPink transition"
              >
                Timer
              </a>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
