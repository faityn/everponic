import "react-multi-carousel/lib/styles.css";
import PageBanner from "@src/components/Banner/PageBanner";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import Section5Item from "@src/components/Produce/Section5Item";
import Section4Item from "@src/components/Produce/Section4Item";
import Layout from "@src/components/Layout";
const Page = () => {
  const BannerInfo = {
    title: "PRODUCE",
    text:
      "Our automation technology and advance hydroponic\ngrowing techniques guarantee consistent,\n",
    white_text: "tasty and nutritious harvests.",
    img: "/images/b2.png",
  };
  const itemList = [
    {
      title: "Producing Hydroponically",
      subText:
        "Hydroponics is a growing method that replaces soil with a water mixture that delivers the nutrients plants need directly to their roots. It allows for more precise control over the growing process.",
    },
    {
      title: "Non-Seasonal Local Food Supply",
      subText:
        "Since we grow inside clean and controlled environments, we are able to grow 365 days, all year-round. No more seasons!",
    },
    {
      title: "Product Consistency",
      subText:
        "One key benefit is having product consistency from a quality stand point. ",
    },
    {
      title: "Climate Friendly",
      subText:
        "Our method allows us to use 90% less water, less land, and less waste than traditional soil farms.",
    },
  ];

  const section5itemList = [
    {
      title: "Green Butter",
      image: "/images/g1.png",
    },
    {
      title: "Red Butter",
      image: "/images/g2.png",
    },
    {
      title: "Red Oakleaf",
      image: "/images/g3.png",
    },
    {
      title: "Green Oakleaf",
      image: "/images/g4.png",
    },
    {
      title: "Green Frilly",
      image: "/images/g5.png",
    },
    {
      title: "Red Coral",
      image: "/images/g6.png",
    },
    {
      title: "Bulls Blood",
      image: "/images/g7.png",
    },
    {
      title: "Bulls Blood",
      image: "/images/g8.png",
    },
    {
      title: "Bulls Blood",
      image: "/images/g9.png",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    largeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1644 },
      items: 7,
    },
    desktop2: {
      breakpoint: { max: 1644, min: 1310 },
      items: 5,
    },
    desktop3: {
      breakpoint: { max: 1310, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1080, min: 820 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 820, min: 520 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };
  return (
    <Layout>
      <div className="h-full relative">
        <PageBanner info={BannerInfo} />

        <div id="section2" className="bg-white">
          <div className="fontPretendard max-w-[1800px] mx-auto w-full pt-28 pb-24">
            <div className="flex max-md:flex-col gap-5">
              <div className="w-full ">
                <p className="text-[48px] leading-[57px] max-w-[648px] max-md:max-w-[358px] max-md:mx-auto font-semibold text-black max-md:text-center max-md:text-[32px] max-md:leading-[38px]">
                  Producing premium quality, sustainable and tasty
                </p>
              </div>
              <div className="w-full flex justify-end max-md:justify-center pt-5">
                <p className="max-w-[456px] max-md:max-w-[358px] text-xl text-[#353644] font-normal max-md:text-center">
                  Our vertical hydroponic system produces leafy greens and herbs
                  in a controlled environment with the following benefits:
                </p>
              </div>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-10 ">
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center border-b border-r  border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_1.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Year-round Supply
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center border-b sm:border-r border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_2.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Low Inputs
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center border-b border-r border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_3.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Small Footprint
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center border-b sm:border-r border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_4.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Less Distance to Market
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center border-b max-sm:border-r border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_5.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Minimal Waste
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center sm:border-r max-sm:border-b border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_6.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Higher yield per m2
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center  border-r max-sm:border-b border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_7.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Consistent superior quality
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center max-sm:border-b sm:border-r border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_8.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Real-time data
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center  border-r border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_9.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Automated Operations
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[56px] max-xl:gap-[45px] max-md:gap-[30px] w-full justify-center items-center   border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_10.svg"
                    alt="basket"
                    className="w-12 h-12 max-xl:w-10 max-xl:h-10 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    Zero Environmental Impact
                  </div>
                </div>
                {/* {itemList3?.map((item, index) => {
                                return (
                                    <SectionThreeItem
                                        key={index}
                                        title={item?.title}
                                        subText={item?.subText}
                                        img={item?.img}
                                    />
                                );
                            })} */}
              </div>
            </div>
          </div>
        </div>

        <div id="section3" className="bg-[#111111]  relative ">
          <div className=" h-full w-full max-w-[1800px] mx-auto top-0  pb-20">
            <div className="w-full text-greyText max-w-[976px] text-[48px] fontRobotoMedium py-16 leading-[62px]">
              Our{" "}
              <span className="text-white">
                automation technology and advance hydroponic growing techniques
              </span>{" "}
              guarantee consistent, tasty and nutritious harvests
            </div>
            <div className="h-full w-full flex max-md:flex-col gap-6 items-center justify-center ">
              <div className=" ">
                <Image
                  src="/images/b3.png"
                  alt="basket"
                  className=" object-cover object-center w-full"
                  width="888"
                  height="500"
                  unoptimized={true}
                  priority={true}
                />
              </div>

              <div className="">
                <Image
                  src="/images/p8.png"
                  alt="basket"
                  className=" object-cover object-center w-full"
                  width="888"
                  height="500"
                  unoptimized={true}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="section4" className=" bg-white h-full">
          <div className=" grid grid-cols-12 w-full max-w-[1800px] mx-auto   ">
            {itemList?.map((item, index) => {
              return (
                <Section4Item
                  key={index}
                  count={index}
                  title={item?.title}
                  subText={item?.subText}
                />
              );
            })}
          </div>
        </div>
        <div id="section5" className=" bg-white h-full">
          <div className=" w-full max-w-[1800px] mx-auto  pb-20 ">
            <div className="text-center text-[#232324] py-28">
              <div className="text-[32px] fontRobotoMedium font-semibold mb-3">
                Variety of Crop types
              </div>
              <div className="text-[20px] fontRobotoMedium font-medium">
                Over 120 crops can be produced, including leafy vegetables,
                herbs,
                <br /> flowers, strawberry and sprouts, and specialty crops.
              </div>
            </div>

            <div className="relative ">
              <Carousel
                responsive={responsive}
                swipeable
                draggable
                centerMode={false}
                //autoPlaySpeed={3000}
                infinite
                pauseOnHover
                dotListClass=""
                showDots={false}
                renderDotsOutside={false}
                slidesToSlide={1}
                className=" pb-8 hover:animate-none"
                arrows={false}
              >
                {section5itemList &&
                  section5itemList.map((item, index) => (
                    <div key={index} className={`animate-line2 mx-5`}>
                      <Section5Item title={item?.title} img={item?.image} />
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
