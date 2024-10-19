import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Home = () => {
    const ref = useRef(null);
    const swiperRef = useRef<SwiperCore>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [direction, setDirection] = useState<any>("vertical");
    const [autoHeight, setAutoHeight] = useState(true);

    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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

    return (
        <div id="mainLayout">
            <Head>
                <title>EVERPONIC: Home </title>
                <link ref={ref} href="/favicon.ico" hrefLang="x-default" />
                <link ref={ref} href="/favicon.ico" hrefLang="en" />
                <link ref={ref} href="/favicon.ico" hrefLang="jp" />
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

            <div className="bg-[#111111] pt-[130px] pb-[130px] max-sm:pt-[50px] max-sm:pb-[30px]">
                <div className="text-[#0081DE] text-center w-full text-[18px] max-sm:text-sm">
                    OVERVIEW
                </div>

                <div className="flex flex-col items-center justify-center w-full text-[30px] max-sm:text-xl">
                    <div className="text-white w-full text-center">
                        Hydroponic vertical system maximizes cultivation space
                        to increase yields{" "}
                    </div>
                    <div className="text-greyText w-full text-center">
                        and minimizes water consumption by water cycling system.
                    </div>
                    <div className="text-greyText w-full text-center">
                        By utilizing ICT technology and an automated control
                        system, we are able to{" "}
                    </div>
                    <div className="text-greyText w-full text-center">
                        produce always Fresh plants in an optimized environment.
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
                            <div className="text-center px-[60px] flex justify-center items-center  h-full">
                                <div
                                    className={`fontPretendard lg:text-[64px]  text-white font-medium leading-[80px] `}
                                >
                                    We’ve shortened the supply chain. <br />
                                    Now you decide what grow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#111111] pt-[100px] pb-[74px] h-full relative">
                <div className="fontPretendard text-[64px] max-md:text-[32px] max-md:leading-[48px]  text-[#767676] font-light mt-20 mb-40 leading-[80px] text-center">
                    We provides{" "}
                    <span className="text-white">One-stop CARE service </span>{" "}
                    <br />
                    for customers with easy work and <br /> stable profit
                    generation.
                </div>
                <div className="h-full relative min-h-[700px] overflow-hidden">
                    <div className="flex flex-col max-w-[1800px] m-auto h-full">
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
                            className="mySwiper3 w-full min-h-[860px] max-h-[860px]  "
                        >
                            <SwiperSlide className="mx-auto min-h-[600px] max-h-[600px] ">
                                <Link href="/plant_factory">
                                    <div className="w-full  ">
                                        <div className="text-center items-center flex flex-col  justify-center ">
                                            <img
                                                className="h-auto w-full rounded-[46px] "
                                                src="/service1.png"
                                                alt=""
                                            />
                                            <div className="absolute max-w-[650px] m-auto  bg-black/40  py-5 "></div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="mx-auto  max-h-[600px] ">
                                <Link href="/produce">
                                    <div className="w-full ">
                                        <div className="text-center  items-center flex flex-col  justify-center ">
                                            <img
                                                className="h-auto w-full rounded-[46px] "
                                                src="/service2.png"
                                                alt=""
                                            />
                                            <div className="absolute max-w-[650px] m-auto  bg-black/40  py-5 "></div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="mx-auto max-h-[600px] ">
                                <Link href="/distribution">
                                    <div className="w-full ">
                                        <div className="text-center  items-center flex flex-col  justify-center ">
                                            <img
                                                className="h-auto w-full rounded-[46px] "
                                                src="/service3.png"
                                                alt=""
                                            />
                                            <div className="absolute max-w-[650px] m-auto  bg-black/40  py-5 "></div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="mx-auto ">
                                <div
                                    className="w-full cursor-pointer"
                                    onClick={() => slideTo2()}
                                >
                                    <div className="text-center  items-center flex flex-col  justify-center ">
                                        <img
                                            className="h-auto w-full rounded-[46px] "
                                            src="/service4.png"
                                            alt=""
                                        />
                                        <div className="absolute max-w-[650px] m-auto  bg-black/40  py-5 "></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}
