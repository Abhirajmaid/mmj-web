"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { heroSlides } from "@/src/data/data";
import Image from "next/image";

const SlideCard = ({ img, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl">
      <div className="relative w-full h-52 mb-4">
        <Image
          src={img}
          alt="Slide Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold p-3 pl-5">{title}</h3>
    </div>
  );
};

const HeroMobile = () => {
  return (
    <section className="md:hidden flex w-full mt-[80px] justify-center items-center bg-white">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1.2}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideCard img={slide.img} title={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroMobile;
