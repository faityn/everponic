import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const FadeTextKo: React.FC = () => {
  return (
    <div className="notranslate">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation
        direction={"vertical"}
        className="mySwiper w-full h-[300px]"
      >
        <SwiperSlide className="bg-[#111111]">
          <div className={`w-full text-center color-loop`}>
            우리는 지속 가능한 신선한 농산물을 생산할 수 있는{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            모듈형 컨테이너 식물 공장을 제공하고 농가에서 쉽게 운영할 수 있도록{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            솔루션을 제공합니다. 더 나아가, 소비자와 기업이 원하는 신선한
            채소류,{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            허브류를 계획 생산 재배하여 직접 공급받을 수 있도록 합니다.
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#111111]">
          <div className={`w-full text-center text-greyText`}>
            우리는 지속 가능한 신선한 농산물을 생산할 수 있는{" "}
          </div>
          <div className={` w-full text-center color-loop `}>
            모듈형 컨테이너 식물 공장을 제공하고 농가에서 쉽게 운영할 수 있도록{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            솔루션을 제공합니다. 더 나아가, 소비자와 기업이 원하는 신선한
            채소류,{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            허브류를 계획 생산 재배하여 직접 공급받을 수 있도록 합니다.
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#111111]">
          <div className={`w-full text-center text-greyText`}>
            우리는 지속 가능한 신선한 농산물을 생산할 수 있는{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            모듈형 컨테이너 식물 공장을 제공하고 농가에서 쉽게 운영할 수 있도록{" "}
          </div>
          <div className={` w-full text-center  color-loop`}>
            솔루션을 제공합니다. 더 나아가, 소비자와 기업이 원하는 신선한
            채소류,{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            허브류를 계획 생산 재배하여 직접 공급받을 수 있도록 합니다.
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#111111]">
          <div className={`w-full text-center text-greyText`}>
            우리는 지속 가능한 신선한 농산물을 생산할 수 있는{" "}
          </div>
          <div className={` w-full text-center text-greyText`}>
            모듈형 컨테이너 식물 공장을 제공하고 농가에서 쉽게 운영할 수 있도록{" "}
          </div>
          <div className={` w-full text-center text-greyText `}>
            솔루션을 제공합니다. 더 나아가, 소비자와 기업이 원하는 신선한
            채소류,{" "}
          </div>
          <div className={` w-full text-center  color-loop`}>
            허브류를 계획 생산 재배하여 직접 공급받을 수 있도록 합니다.
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FadeTextKo;
