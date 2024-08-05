"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { heroSlides } from "@/src/data/data";
import Link from "next/link";

const Slide = ({ img, url }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Link href={`${url}`} className="w-full h-full">
        <Image
          src={img}
          width={500}
          height={500}
          className="block w-full h-full object-cover"
          alt="mmj"
          priority
        />
      </Link>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] bg-white">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {heroSlides.map((item, key) => {
          return (
            <SwiperSlide>
              <Slide img={item.img} url={item.url} key={key} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
