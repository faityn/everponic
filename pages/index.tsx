import Head from "next/head";

import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ActionButtonWhite from "@src/components/common/ActionButtonWhite";
import Layout from "@src/components/Layout";
import { useTranslation } from "next-i18next";
const Home = () => {
  //const { t } = useTranslation("common");
  const { t } = useTranslation("common");
  const ref = useRef(null);
  const swiperRef = useRef<SwiperCore>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [direction, setDirection] = useState<any>("vertical");
  const [autoHeight, setAutoHeight] = useState(true);
  const [activeText, setActiveText] = useState("");
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const slideTo2 = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Jump to the first slide (index 0)
    }
  };
  useEffect(() => {
    if (screenSize?.width < 500) {
      setDirection("horizontal");
      setAutoHeight(true);
    } else {
      setDirection("vertical");
      setAutoHeight(false);
    }
  }, [screenSize]);
  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add the event listener when the component is mounted (on the client side)
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial screen size
    handleResize();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vidRef: any = useRef(null);

  useEffect(() => {
    vidRef?.current?.play();
  }, []);

  useEffect(() => {
    // Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Current section ID: ${entry.target.id}`);
            setActiveText(entry.target.id);
            // Add custom behavior for when the div is in view
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Attach observer to each section
    sectionRefs.current.forEach((section) => observer.observe(section));

    // Clean up observer on component unmount
    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <Layout type="main">
      <div id="mainLayout">
        <Head>
          <title>EVERPONIC: Home </title>
          <link ref={ref} href="/favicon.ico" hrefLang="x-default" />
          <link ref={ref} href="/favicon.ico" hrefLang="en" />
          <link ref={ref} href="/favicon.ico" hrefLang="ko" />
        </Head>

        <Swiper
          speed={1000}
          autoHeight={autoHeight}
          autoplay={{
            delay: 8000,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={1}
          mousewheel={false}
          loop={true}
          direction={direction}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Mousewheel]}
          className="mySwiper  w-full h-auto "
        >
          <SwiperSlide className="mx-auto bg-white ">
            <div className="w-full h-screen max-sm:h-[500px] bg-cover ">
              <div className="text-center  items-center flex flex-col  justify-center ">
                <video
                  controls={false}
                  playsInline={true}
                  autoPlay={true}
                  ref={vidRef}
                  muted
                  loop
                  preload="auto"
                  className="w-full h-screen max-sm:h-[500px] object-cover "
                >
                  <source
                    src="https://res.cloudinary.com/dhlerg3fo/video/upload/v1728718147/hrfp4mt0adrsor92aw4r.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute max-w-[650px] m-auto  bg-black/40  py-5 "></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="bg-[#111111] pt-[130px] pb-[130px] max-sm:pt-[50px] max-sm:pb-[30px] relative ">
          <div className="text-[#0081DE] text-center w-full text-[18px] max-sm:text-sm notranslate">
            OVERVIEW
          </div>

          <div className="flex flex-col items-center justify-center w-full text-[30px] max-sm:text-xl relative">
            <div>
              <div
                className={`${
                  activeText === "text1"
                    ? "animate-colorChange"
                    : "text-greyText"
                }  w-full text-center`}
              >
                We provides modular container plant factory capable of{" "}
              </div>
              <div
                className={`${
                  activeText === "text2"
                    ? "animate-colorChange"
                    : "text-greyText"
                }  w-full text-center`}
              >
                producing sustainable fresh crops. Our system is designed for
                easy{" "}
              </div>
              <div
                className={`${
                  activeText === "text3"
                    ? "animate-colorChange"
                    : "text-greyText"
                }  w-full text-center`}
              >
                operation by users. Furthermore, we enables consumers and
                businesses to{" "}
              </div>
              <div
                className={`${
                  activeText === "text4"
                    ? "animate-colorChange"
                    : "text-greyText"
                }  w-full text-center`}
              >
                directly receive the fresh vegetables and herbs
              </div>
              <div
                className={`${
                  activeText === "text5"
                    ? "animate-colorChange"
                    : "text-greyText"
                }  w-full text-center`}
              >
                they desire through planned production and cultivation.
              </div>
            </div>
          </div>
          <div className="text-center max-w-[1496px] m-auto items-center  grid grid-cols-12 justify-center pt-20 ">
            <div className="col-span-12  ">
              <video
                controls={false}
                playsInline={false}
                autoPlay={true}
                loop
                muted
                height="630"
                preload="auto"
                className="w-full md:h-[630px] object-cover rounded-xl "
              >
                <source
                  src="https://res.cloudinary.com/dhlerg3fo/video/upload/v1728718147/hrfp4mt0adrsor92aw4r.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-center  ">
            <div className="relative flex justify-center items-center ">
              <video
                controls={false}
                playsInline={false}
                autoPlay={true}
                loop
                muted
                preload="auto"
                className="w-full md:h-[900px] max-sm:h-[556px] object-cover  "
              >
                <source
                  src="https://res.cloudinary.com/dhlerg3fo/video/upload/v1728722943/l7vjfgilhj81dvhbdp6k.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute max-w-full  h-full w-full bg-black/40  py-5 ">
                <div className="text-center px-[60px] flex flex-col justify-center items-center  h-full">
                  <div
                    className={`fontPretendard lg:text-[64px]  text-white font-medium leading-[80px] `}
                  >
                    We’ve shortened the supply chain. <br />
                    Now you decide what grow.
                  </div>
                  <div className="mt-10">
                    <Link href="#">
                      <ActionButtonWhite />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#111111] pt-[100px] pb-[74px] h-full relative whitespace-pre-line">
          <div className="fontPretendard text-[50px] max-md:text-[32px] max-md:leading-[48px]  text-[#767676] font-light mt-20 mb-40 leading-[64px] text-center">
            We provides{" "}
            <span className="text-white font-medium">
              <span>one-stop </span> CARE service
            </span>{" "}
            for customers
            <br />
            with easy work and stable profit generation.
          </div>
          <div className="h-full relative min-h-[700px] overflow-hidden">
            <div className="flex flex-col max-w-[1800px] m-auto h-full">
              <div className="max-sm:hidden">
                <Swiper
                  speed={1000}
                  //autoHeight={autoHeight}
                  autoplay={{
                    delay: 8000,
                    pauseOnMouseEnter: false,
                  }}
                  //grabCursor={true}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  slidesPerView={"auto"}
                  effect={"creative"}
                  // creativeEffect={{
                  //     prev: {
                  //         shadow: true,
                  //         translate: [-1, 0, "-20%"],
                  //     },
                  //     next: {
                  //         translate: [0, 0, "100%"],
                  //     },
                  // }}
                  mousewheel={true}
                  loop={false}
                  direction={"vertical"}
                  modules={[Pagination, Autoplay, Mousewheel]}
                  className="mySwiper3 max-sm:hidden w-full min-h-[860px] max-h-[860px] max-xl:min-h-[550px] max-xl:max-h-[550px] max-lg:min-h-[400px] max-lg:max-h-[400px] max-sm:min-h-full "
                >
                  <SwiperSlide className=" mx-auto min-h-[600px] max-h-[600px] max-xl:min-h-[400px] max-xl:max-h-[400px] max-lg:min-h-[260px] max-lg:max-h-[260px] max-sm:min-h-full">
                    <Link href="/plant_factory">
                      <div className="w-full relative ">
                        <div className="text-center items-center flex flex-col  justify-center ">
                          <img
                            className="h-auto w-full rounded-[46px] max-sm:rounded-2xl"
                            src="/s1.png"
                            alt=""
                          />
                        </div>
                        <div className="absolute w-full h-full m-auto top-0 py-5 max-sm:py-3">
                          <div className="flex w-full pt-16 px-24 max-xl:pt-10 max-xl:px-16 max-lg:pt-6 max-lg:px-10 max-sm:px-4 max-sm:pt-1 justify-between ">
                            <div className="">
                              <div className="flex  items-center gap-5 max-sm:gap-2">
                                <img
                                  className="h-[71px] w-[171px] max-xl:h-[58px] max-xl:w-[158px] max-lg:h-[35px] max-lg:w-[90px] max-sm:h-[18px] max-sm:w-[38px]"
                                  src="/svg/ep.svg"
                                  alt=""
                                />
                                <div className="text-[100px] leading-[100px] max-xl:text-[80px] max-xl:leading-[80px] max-lg:text-[50px] max-lg:leading-[50px] max-sm:text-2xl max-sm:font-semibold RobotoBold sm:font-bold">
                                  Plant Factory
                                </div>
                              </div>

                              <div className="text-2xl max-xl:text-xl max-lg:text-md fontPretendard font-medium max-w-[600px] mt-10 max-lg:mt-5 max-sm:text-[10px] max-sm:leading-4 max-sm:mt-1">
                                {t("solution_1_text")}
                              </div>

                              <div className=" mt-3 max-sm:h-6 max-md:h-10 max-xl:h-12">
                                <Image
                                  src="/images/read_more.png"
                                  alt="basket"
                                  className="w-auto h-full  "
                                  width="54"
                                  height="54"
                                  unoptimized={true}
                                  priority={true}
                                />
                              </div>
                            </div>
                            <div className="">
                              <div className="max-sm:w-[70px]">
                                <div className="fontRobotoRegular text-xl max-xl:text-lg text-primary text-right  pr-4 max-xl:pr-3 max-lg:text-sm max-sm:text-[10px] max-lg:mt-1 max-lg:pr-2 max-sm:pr-1">
                                  Our solutions
                                </div>
                                <div className="fontPretendard text-stroke font-semibold text-[160px] leading-[160px] max-xl:text-[100px] max-xl:leading-[100px] max-lg:text-[80px] max-lg:leading-[80px] max-sm:text-[48px] max-sm:leading-[40px] text-right ">
                                  01
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="mx-auto  max-h-[600px] max-xl:min-h-[400px] max-xl:max-h-[400px] max-lg:min-h-[260px] max-lg:max-h-[260px] max-sm:min-h-full">
                    <Link href="/produce">
                      <div className="w-full relative ">
                        <div className="text-center items-center flex flex-col  justify-center ">
                          <img
                            className="h-auto w-full rounded-[46px] max-sm:rounded-2xl"
                            src="/s2.png"
                            alt=""
                          />
                        </div>
                        <div className="absolute w-full h-full m-auto top-0 py-5 max-sm:py-3">
                          <div className="flex w-full pt-16 px-24 max-xl:pt-10 max-xl:px-16 max-lg:pt-6 max-lg:px-10 max-sm:px-4 max-sm:pt-1 justify-between ">
                            <div className="">
                              <div className="flex  items-center gap-5 max-sm:gap-2">
                                <img
                                  className="h-[71px] w-[171px] max-xl:h-[58px] max-xl:w-[158px] max-lg:h-[35px] max-lg:w-[90px] max-sm:h-[18px] max-sm:w-[38px]"
                                  src="/svg/ep.svg"
                                  alt=""
                                />
                                <div className="text-[100px] leading-[100px] max-xl:text-[80px] max-xl:leading-[80px] max-lg:text-[50px] max-lg:leading-[50px] max-sm:text-2xl max-sm:font-semibold RobotoBold sm:font-bold">
                                  Produce
                                </div>
                              </div>

                              <div className="text-2xl max-xl:text-xl max-lg:text-md fontPretendard font-medium max-w-[600px] mt-10 max-lg:mt-5 max-sm:text-[10px] max-sm:leading-4 max-sm:mt-1">
                                {t("solution_2_text")}
                              </div>

                              <div className=" mt-3 max-sm:h-6 max-md:h-10 max-xl:h-12">
                                <Image
                                  src="/images/read_more.png"
                                  alt="basket"
                                  className="w-auto h-full  "
                                  width="54"
                                  height="54"
                                  unoptimized={true}
                                  priority={true}
                                />
                              </div>
                            </div>
                            <div className="">
                              <div className="max-sm:w-[70px]">
                                <div className="fontRobotoRegular text-xl max-xl:text-lg text-primary text-right  pr-4 max-xl:pr-3 max-lg:text-sm max-sm:text-[10px] max-lg:mt-1 max-lg:pr-2 max-sm:pr-1">
                                  Our solutions
                                </div>
                                <div className="fontPretendard text-stroke font-semibold text-[160px] leading-[160px] max-xl:text-[100px] max-xl:leading-[100px] max-lg:text-[80px] max-lg:leading-[80px] max-sm:text-[48px] max-sm:leading-[40px] text-right ">
                                  02
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="mx-auto max-h-[600px] max-xl:min-h-[400px] max-xl:max-h-[400px] max-lg:min-h-[260px] max-lg:max-h-[260px] max-sm:min-h-full">
                    <Link href="/distribution">
                      <div className="w-full relative ">
                        <div className="text-center items-center flex flex-col  justify-center ">
                          <img
                            className="h-auto w-full rounded-[46px] max-sm:rounded-2xl"
                            src="/s3.png"
                            alt=""
                          />
                        </div>
                        <div className="absolute w-full h-full m-auto top-0 py-5 max-sm:py-3">
                          <div className="flex w-full pt-16 px-24 max-xl:pt-10 max-xl:px-16 max-lg:pt-6 max-lg:px-10 max-sm:px-4 max-sm:pt-1 justify-between ">
                            <div className="">
                              <div className="flex  items-center gap-5 max-sm:gap-2">
                                <img
                                  className="h-[71px] w-[171px] max-xl:h-[58px] max-xl:w-[158px] max-lg:h-[35px] max-lg:w-[90px] max-sm:h-[18px] max-sm:w-[38px]"
                                  src="/svg/ep.svg"
                                  alt=""
                                />
                                <div className="text-[100px] leading-[100px] max-xl:text-[80px] max-xl:leading-[80px] max-lg:text-[50px] max-lg:leading-[50px] max-sm:text-2xl max-sm:font-semibold RobotoBold sm:font-bold">
                                  Distribution
                                </div>
                              </div>

                              <div className="text-2xl max-xl:text-xl max-lg:text-md fontPretendard font-medium max-w-[600px] mt-10 max-lg:mt-5 max-sm:text-[10px] max-sm:leading-4 max-sm:mt-1">
                                {t("solution_3_text")}
                              </div>

                              <div className=" mt-3 max-sm:h-6 max-md:h-10 max-xl:h-12">
                                <Image
                                  src="/images/read_more.png"
                                  alt="basket"
                                  className="w-auto h-full  "
                                  width="54"
                                  height="54"
                                  unoptimized={true}
                                  priority={true}
                                />
                              </div>
                            </div>
                            <div className="">
                              <div className="max-sm:w-[70px]">
                                <div className="fontRobotoRegular text-xl max-xl:text-lg text-primary text-right  pr-4 max-xl:pr-3 max-lg:text-sm max-sm:text-[10px] max-lg:mt-1 max-lg:pr-2 max-sm:pr-1">
                                  Our solutions
                                </div>
                                <div className="fontPretendard text-stroke font-semibold text-[160px] leading-[160px] max-xl:text-[100px] max-xl:leading-[100px] max-lg:text-[80px] max-lg:leading-[80px] max-sm:text-[48px] max-sm:leading-[40px] text-right ">
                                  03
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="mx-auto h-full max-xl:min-h-[500px] max-lg:min-h-[400px] max-lg:max-h-[400px]">
                    <div
                      className="w-full cursor-pointer"
                      onClick={() => slideTo2()}
                    >
                      <div className="w-full ">
                        <div className="w-full relative ">
                          <div className="text-center items-center flex flex-col  justify-center ">
                            <img
                              className="h-auto w-full rounded-[46px] "
                              src="/s4.png"
                              alt=""
                            />
                          </div>
                          <div className="absolute w-full h-full m-auto top-0   py-5 ">
                            <div className="flex items-center justify-center text-center w-full h-full pt-16 px-24 text-[70px]  leading-[88px] RobotoRegular font-semibold max-xl:text-[40px] max-xl:leading-[48px]">
                              {t("solution_4_text")}
                              {/* The future business starts
                            <br /> here, we grow with you. */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="sm:hidden flex flex-col gap-5">
                <div className="">
                  <Link href="/plant_factory">
                    <div className="w-full relative ">
                      <div className="text-center items-center flex flex-col  justify-center ">
                        <img
                          className="h-auto w-full rounded-[46px] max-sm:rounded-2xl"
                          src="/s1.png"
                          alt=""
                        />
                      </div>
                      <div className="absolute w-full h-full m-auto top-0 py-5 max-sm:py-3">
                        <div className="flex w-full pt-16 px-24 max-xl:pt-10 max-xl:px-16 max-lg:pt-6 max-lg:px-10 max-sm:px-4 max-sm:pt-1 justify-between ">
                          <div className="">
                            <div className="flex  items-center gap-5 max-sm:gap-2">
                              <img
                                className="h-[71px] w-[171px] max-xl:h-[58px] max-xl:w-[158px] max-lg:h-[35px] max-lg:w-[90px] max-sm:h-[18px] max-sm:w-[38px]"
                                src="/svg/ep.svg"
                                alt=""
                              />
                              <div className="text-[100px] leading-[100px] max-xl:text-[80px] max-xl:leading-[80px] max-lg:text-[50px] max-lg:leading-[50px] max-sm:text-2xl max-sm:font-semibold RobotoBold sm:font-bold">
                                Plant Factory
                              </div>
                            </div>

                            <div className="text-2xl max-xl:text-xl max-lg:text-md fontPretendard font-medium max-w-[600px] mt-10 max-lg:mt-5 max-sm:text-[10px] max-sm:leading-4 max-sm:mt-1">
                              {t("solution_1_text")}
                            </div>

                            <div className=" mt-3 max-sm:h-6 max-md:h-10 max-xl:h-12">
                              <Image
                                src="/images/read_more.png"
                                alt="basket"
                                className="w-auto h-full  "
                                width="54"
                                height="54"
                                unoptimized={true}
                                priority={true}
                              />
                            </div>
                          </div>
                          <div className="">
                            <div className="max-sm:w-[70px]">
                              <div className="fontRobotoRegular text-xl max-xl:text-lg text-primary text-right  pr-4 max-xl:pr-3 max-lg:text-sm max-sm:text-[10px] max-lg:mt-1 max-lg:pr-2 max-sm:pr-1">
                                Our solutions
                              </div>
                              <div className="fontPretendard text-stroke font-semibold text-[160px] leading-[160px] max-xl:text-[100px] max-xl:leading-[100px] max-lg:text-[80px] max-lg:leading-[80px] max-sm:text-[48px] max-sm:leading-[40px] text-right ">
                                01
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="">
                  <Link href="/produce">
                    <div className="w-full relative ">
                      <div className="text-center items-center flex flex-col  justify-center ">
                        <img
                          className="h-auto w-full rounded-[46px] max-sm:rounded-2xl"
                          src="/s2.png"
                          alt=""
                        />
                      </div>
                      <div className="absolute w-full h-full m-auto top-0 py-5 max-sm:py-3">
                        <div className="flex w-full pt-16 px-24 max-xl:pt-10 max-xl:px-16 max-lg:pt-6 max-lg:px-10 max-sm:px-4 max-sm:pt-1 justify-between ">
                          <div className="">
                            <div className="flex  items-center gap-5 max-sm:gap-2">
                              <img
                                className="h-[71px] w-[171px] max-xl:h-[58px] max-xl:w-[158px] max-lg:h-[35px] max-lg:w-[90px] max-sm:h-[18px] max-sm:w-[38px]"
                                src="/svg/ep.svg"
                                alt=""
                              />
                              <div className="text-[100px] leading-[100px] max-xl:text-[80px] max-xl:leading-[80px] max-lg:text-[50px] max-lg:leading-[50px] max-sm:text-2xl max-sm:font-semibold RobotoBold sm:font-bold">
                                Produce
                              </div>
                            </div>

                            <div className="text-2xl max-xl:text-xl max-lg:text-md fontPretendard font-medium max-w-[600px] mt-10 max-lg:mt-5 max-sm:text-[10px] max-sm:leading-4 max-sm:mt-1">
                              {t("solution_2_text")}
                            </div>

                            <div className=" mt-3 max-sm:h-6 max-md:h-10 max-xl:h-12">
                              <Image
                                src="/images/read_more.png"
                                alt="basket"
                                className="w-auto h-full  "
                                width="54"
                                height="54"
                                unoptimized={true}
                                priority={true}
                              />
                            </div>
                          </div>
                          <div className="">
                            <div className="max-sm:w-[70px]">
                              <div className="fontRobotoRegular text-xl max-xl:text-lg text-primary text-right  pr-4 max-xl:pr-3 max-lg:text-sm max-sm:text-[10px] max-lg:mt-1 max-lg:pr-2 max-sm:pr-1">
                                Our solutions
                              </div>
                              <div className="fontPretendard text-stroke font-semibold text-[160px] leading-[160px] max-xl:text-[100px] max-xl:leading-[100px] max-lg:text-[80px] max-lg:leading-[80px] max-sm:text-[48px] max-sm:leading-[40px] text-right ">
                                02
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="">
                  <Link href="/distribution">
                    <div className="w-full relative ">
                      <div className="text-center items-center flex flex-col  justify-center ">
                        <img
                          className="h-auto w-full rounded-[46px] max-sm:rounded-2xl"
                          src="/s3.png"
                          alt=""
                        />
                      </div>
                      <div className="absolute w-full h-full m-auto top-0 py-5 max-sm:py-3">
                        <div className="flex w-full pt-16 px-24 max-xl:pt-10 max-xl:px-16 max-lg:pt-6 max-lg:px-10 max-sm:px-4 max-sm:pt-1 justify-between ">
                          <div className="">
                            <div className="flex  items-center gap-5 max-sm:gap-2">
                              <img
                                className="h-[71px] w-[171px] max-xl:h-[58px] max-xl:w-[158px] max-lg:h-[35px] max-lg:w-[90px] max-sm:h-[18px] max-sm:w-[38px]"
                                src="/svg/ep.svg"
                                alt=""
                              />
                              <div className="text-[100px] leading-[100px] max-xl:text-[80px] max-xl:leading-[80px] max-lg:text-[50px] max-lg:leading-[50px] max-sm:text-2xl max-sm:font-semibold RobotoBold sm:font-bold">
                                Distribution
                              </div>
                            </div>

                            <div className="text-2xl max-xl:text-xl max-lg:text-md fontPretendard font-medium max-w-[600px] mt-10 max-lg:mt-5 max-sm:text-[10px] max-sm:leading-4 max-sm:mt-1">
                              {t("solution_3_text")}
                            </div>

                            <div className=" mt-3 max-sm:h-6 max-md:h-10 max-xl:h-12">
                              <Image
                                src="/images/read_more.png"
                                alt="basket"
                                className="w-auto h-full  "
                                width="54"
                                height="54"
                                unoptimized={true}
                                priority={true}
                              />
                            </div>
                          </div>
                          <div className="">
                            <div className="max-sm:w-[70px]">
                              <div className="fontRobotoRegular text-xl max-xl:text-lg text-primary text-right  pr-4 max-xl:pr-3 max-lg:text-sm max-sm:text-[10px] max-lg:mt-1 max-lg:pr-2 max-sm:pr-1">
                                Our solutions
                              </div>
                              <div className="fontPretendard text-stroke font-semibold text-[160px] leading-[160px] max-xl:text-[100px] max-xl:leading-[100px] max-lg:text-[80px] max-lg:leading-[80px] max-sm:text-[48px] max-sm:leading-[40px] text-right ">
                                03
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="">
                  <div className="w-full cursor-pointer">
                    <div className="w-full ">
                      <div className="w-full relative ">
                        <div className="text-center items-center flex flex-col  justify-center ">
                          <img
                            className="h-auto w-full rounded-[46px] max-sm:rounded-2xl"
                            src="/s4.png"
                            alt=""
                          />
                        </div>
                        <div className="absolute w-full h-full m-auto top-0   py-5 ">
                          <div className="flex items-center justify-center text-center w-full h-full pt-16 max-sm:pt-2 px-24 text-[70px]  leading-[88px] RobotoRegular font-semibold max-xl:text-[40px] max-xl:leading-[48px] max-sm:text-xl ">
                            {t("solution_4_text")}
                            {/* The future business starts
                            <br /> here, we grow with you. */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
