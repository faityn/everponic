import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const FadeText: React.FC = () => {
  return (
    <div className="notranslate">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={true}
        slidesPerView={1}
        draggable={false}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={false}
        navigation={false}
        allowTouchMove={false}
        direction={"vertical"}
        className="mySwiper w-full h-[300px]"
      >
        <SwiperSlide className="bg-[#111111] non-clickable">
          <div className={`w-full text-center color-loop`}>
            We provides modular container plant factory capable of{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            producing sustainable fresh crops. Our system is designed for easy{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            operation by users. Furthermore, we enables consumers and businesses
            to{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            directly receive the fresh vegetables and herbs
          </div>
          <div className={` w-full text-center text-greyText`}>
            they desire through planned production and cultivation.
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#111111] non-clickable">
          <div className={`w-full text-center text-greyText `}>
            We provides modular container plant factory capable of{" "}
          </div>
          <div className={` w-full text-center color-loop`}>
            producing sustainable fresh crops. Our system is designed for easy{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            operation by users. Furthermore, we enables consumers and businesses
            to{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            directly receive the fresh vegetables and herbs
          </div>
          <div className={` w-full text-center text-greyText`}>
            they desire through planned production and cultivation.
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#111111] non-clickable">
          <div className={`w-full text-center text-greyText`}>
            We provides modular container plant factory capable of{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            producing sustainable fresh crops. Our system is designed for easy{" "}
          </div>
          <div className={` w-full text-center color-loop`}>
            operation by users. Furthermore, we enables consumers and businesses
            to{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            directly receive the fresh vegetables and herbs
          </div>
          <div className={` w-full text-center text-greyText`}>
            they desire through planned production and cultivation.
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#111111] non-clickable">
          <div className={`w-full text-center text-greyText`}>
            We provides modular container plant factory capable of{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            producing sustainable fresh crops. Our system is designed for easy{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            operation by users. Furthermore, we enables consumers and businesses
            to{" "}
          </div>
          <div className={` w-full text-center color-loop`}>
            directly receive the fresh vegetables and herbs
          </div>
          <div className={` w-full text-center text-greyText`}>
            they desire through planned production and cultivation.
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#111111] non-clickable">
          <div className={`w-full text-center text-greyText `}>
            We provides modular container plant factory capable of{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            producing sustainable fresh crops. Our system is designed for easy{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            operation by users. Furthermore, we enables consumers and businesses
            to{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            directly receive the fresh vegetables and herbs
          </div>
          <div className={` w-full text-center color-loop`}>
            they desire through planned production and cultivation.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FadeText;
