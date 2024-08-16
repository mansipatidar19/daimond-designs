import React from "react";

function Footer() {
  return (
    <footer className="bg-warmCoral bg-opacity-5 pb-6 pt-4 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center">
        {/* Company Logo or Icon */}
        <div className="mb-3">
          <img
            src="/images/logo2.png"
            alt="Daimond Designs"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div className="md:mx-2 md:mb-3 text-center md:text-left">
          <p className="text-lg font-semibold md:mb-1">Daimond Designs</p>
          <p className="text-sm">Crafting User-Centric Designs</p>
        </div>

        {/* Company Name and Slogan */}
      </div>
      {/* Copyright Statement */}
      <p className="text-xs mt-4 text-center">
        &copy; 2024 Daimond Designs. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
