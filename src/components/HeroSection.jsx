import React from "react";

function HeroSection() {
  const lineHeight =
    window.innerWidth >= 1024 ? 1.45 : window.innerWidth >= 768 ? 1.25 : 1.1;
    
  return (
    <div className="flex md:flex-row flex-col w-full">
      <section className="basis-1/2 p-6 md:pt-8 md:ps-12 lg:pt-12 lg:ps-16 ">
        <h2 
          className="text-3xl tracking-wide font-bold leading-relaxed mb-2 md:text-5xl"
          style={{ lineHeight: lineHeight }}
        >
          We Make Your Ideas Shine Bright
          <span className="hidden md:block">And Bold</span>
        </h2>
        <p className="text-warmCoral text-sm font-extralight tracking-wide pt-1 pe-3 text-start md:text-base">
          Crafting customized designs that elevate your vision and drive
          results.
        </p>
      </section>
      <div className="basis-1/2 p-4 md:pt-8 lg:pt-12">
        <img
          src="/images/hero-banner.png"
          alt="Your idea our design"
          className="h-72 ps-4"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
}

export default HeroSection;
