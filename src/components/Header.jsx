import React from "react";
import NavLink from "../common/NavLink";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row w-full shadow-sm lg:px-3">
      <div className="md:w-16 lg:w-36 w-28 mt-1">
        <img
          src="/daimond-designs/src/images/logo2.png"
          alt="Daimond Designs"
          className="w-16 h-16 rounded-full"
        />
      </div>

      <div className="w-3/4 hidden md:flex items-center justify-center gap-x-20 pr-10">
        <NavLink href="#features" name="Features" />
        <NavLink href="#projects" name="Projects" />
        <NavLink href="#testimonials" name="Testimonials" />
      </div>
      <div className="hidden md:flex justify-center ms-auto me-3">
        <button className="bg-warmCoral rounded-lg my-3 px-4 text-white hover:shadow-coral transition duration-150">
          Try a Demo
        </button>
      </div>
      <div className="md:hidden flex ms-auto flex-col me-4">
        {/* Hamburger Icon */}
        <div className="md:hidden flex items-end ms-auto mt-2 pt-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
            {isOpen ? (
              <FiX size={32} color="#F89671" />
            ) : (
              <FiMenu size={32} color="#F89671" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden flex flex-col items-end space-y-2 pb-3 transform transition-all duration-300 ease-in-out origin-top ${
              isOpen ? "animate-slideDown" : "animate-slideUp"
            }`}
          >
            <NavLink href="#features" name="Features" />
            <NavLink href="#projects" name="Projects" />
            <NavLink href="#testimonials" name="Testimonials" />
            <button className="bg-warmCoral rounded-lg my-2 py-1 px-4 text-white hover:shadow-coral transition duration-150">
              Try a Demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
