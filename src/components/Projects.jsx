import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "../common/Project";

function Projects() {
  return (
    <div
      className="mt-8 mb-12 lg:px-12 lg:py-6 md:px-8 md:py-4 px-6 py-3 bg-warmCoral bg-opacity-5 "
      id="projects"
    >
      <h2 className="text-2xl font-semibold mb-4 md:mb-6 lg:mb-8 text-center">
        Tailored Interfaces
      </h2>
      <div>
        <Swiper
          className="mySwiper"
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Project
              src="/daimond-designs/src/images/eCommerce.jpeg"
              title="A static E-Commerce UI"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              src="/daimond-designs/src/images/Sales.jpeg"
              title="A dynamic Sales App"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              src="https://www.dropbox.com/scl/fi/5p1oj6g2a48zq0hx3u8m2/Calculator.jpeg?rlkey=zbivgbadhqetrmmn75nghsaxg&st=mjwmaj0u&dl=0"
              title="A functioning Calculator"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
