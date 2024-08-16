import React from "react";

function CTASection() {
  return (
    <div className="mx-6 md:mx-8 lg:mx-12 items-center flex flex-col" data-aos="zoom-in">
      <h2 className="text-warmCoral font-bold text-2xl md:text-4xl mt-6 text-center">
        Let’s create something amazing together
      </h2>
      <button className="bg-warmCoral rounded-lg my-3 py-1 md:py-2 md:my-5 px-4 text-white hover:shadow-coral transition duration-150">
        Try a Demo
      </button>
    </div>
  );
}

export default CTASection;
