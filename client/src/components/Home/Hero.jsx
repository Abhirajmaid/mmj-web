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

const Slide = ({ img }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image
        src={img}
        width={1920}
        height={1080}
        className="w-full h-full object-fill"
        alt="mmj"
        priority
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] md:block hidden">
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
        className="mySwiper h-full"
      >
        {heroSlides.map((item, key) => {
          return (
            <SwiperSlide key={key} className="h-full">
              <Link href={`${item.url}`} className="w-full h-full">
                <Slide img={item.img} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
