import React from "react";
import testimonialData from "../data/testimonials.json";

function Testimonial() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-12 md:px-8 md:py-4 px-5 py-3 gap-6">
        {testimonialData.map((testimonial, index) => (
          <div
            className="flex flex-col p-2 md:p-3 bg-slate-500 bg-opacity-5 rounded-lg"
            key={index}  data-aos="slide-up"
          >
            <div className="flex flex-row">
              <img
                src={testimonial.image}
                alt=""
                className="h-20 w-20 rounded-full p-2"
              />
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-warmCoral">
                  {testimonial.name}
                </span>
                <div className="flex">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
            </div>
            <span className="px-3 text-sm font-light">
              {testimonial.testimonial}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testimonial;
