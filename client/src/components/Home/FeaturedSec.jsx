"use client";
import React, { useEffect, useState } from "react";
import { goldItems, productData } from "@/src/data/data";
import ProductCard from "../common/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Keyboard, Mousewheel, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";
import jewelleryAction from "@/src/lib/action/jewellery.action";

const FeaturedSec = () => {
  const [feature, setFeature] = useState("newIns");

  const [data, setData] = useState();

  useEffect(() => {
    getJewelleryList();
  }, []);

  const getJewelleryList = () => {
    jewelleryAction.getJewellery().then((resp) => {
      // console.log("hmm", resp.data.data);
      setData(resp.data.data);
    });
  };

  return (
    <section className="mt-[60px] mb-[30px]">
      <div className="flex gap-[10px] w-full justify-center items-center text-black">
        <h1
          className={`text-[32px] flex flex-col cursor-pointer ${
            feature == "bestSeller"
              ? "text-black/40"
              : "text-black border-b-2 border-sec"
          }`}
          onClick={() => setFeature("newIns")}
        >
          New Ins
          <span className="w-[20%] h-[2px] bg-accent mt-1"></span>
        </h1>
        <Icon icon="ph:line-vertical" height={40} width={50} />
        <h1
          className={`text-[32px] flex flex-col cursor-pointer ${
            feature == "newIns"
              ? "text-black/40"
              : "text-black border-b-2 border-sec"
          }`}
          onClick={() => setFeature("bestSeller")}
        >
          Best Seller
          <span className="w-[20%] h-[2px] bg-accent mt-1"></span>
        </h1>
      </div>
      <div className="w-full overflow-hidden my-[30px]">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={false}
          modules={[FreeMode, Keyboard, Mousewheel, Autoplay]}
          keyboard={false}
          mousewheel={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper h-auto w-[80%] !overflow-visible "
        >
          {data
            ?.filter((item) => {
              return item?.attributes?.best_sellers == true;
            })
            .map((item, key) => {
              return (
                <SwiperSlide
                  className="flex items-center justify-center w-[280px] h-auto"
                  key={key}
                >
                  <ProductCard item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedSec;
