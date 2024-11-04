import "react-multi-carousel/lib/styles.css";
import PageBanner from "@src/components/Banner/PageBanner";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import Section5Item from "@src/components/Produce/Section5Item";
import Section4Item from "@src/components/Produce/Section4Item";
import Layout from "@src/components/Layout";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Page = () => {
  const { t } = useTranslation("common");

  const BannerInfo = {
    title: "PRODUCE",
    text: `${t("produce_banner_text")}`,

    img: "/images/b2.png",
  };
  const itemList = [
    {
      title: `${t("produce_section_3_title_1")}`,
      subText: `${t("produce_section_3_text_1")}`,
    },
    {
      title: `${t("produce_section_3_title_2")}`,
      subText: `${t("produce_section_3_text_2")}`,
    },
    {
      title: `${t("produce_section_3_title_3")}`,
      subText: `${t("produce_section_3_text_3")}`,
    },
    {
      title: `${t("produce_section_3_title_4")}`,
      subText: `${t("produce_section_3_text_4")}`,
    },
  ];

  const section5itemList = [
    {
      title: `${t("crop_type_1")}`,
      image: "/images/g1.png",
    },
    {
      title: `${t("crop_type_2")}`,
      image: "/images/g2.png",
    },
    {
      title: `${t("crop_type_3")}`,
      image: "/images/g3.png",
    },
    {
      title: `${t("crop_type_4")}`,
      image: "/images/g4.png",
    },
    {
      title: `${t("crop_type_5")}`,
      image: "/images/g5.png",
    },
    {
      title: `${t("crop_type_6")}`,
      image: "/images/g6.png",
    },
    {
      title: `${t("crop_type_7")}`,
      image: "/images/g7.png",
    },
    {
      title: `${t("crop_type_8")}`,
      image: "/images/g8.png",
    },
    {
      title: `${t("crop_type_9")}`,
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
      <div className="h-full relative notranslate whitespace-pre-line">
        <PageBanner info={BannerInfo} />

        <div id="session_" className="bg-white">
          <div className="fontPretendard max-w-[1800px] mx-auto w-full pt-28 pb-24">
            <div className="flex max-md:flex-col gap-5">
              <div className="w-full ">
                <p className="text-[48px] leading-[57px] max-w-[648px] max-md:max-w-[358px] max-md:mx-auto font-semibold text-black max-md:text-center max-md:text-[32px] max-md:leading-[38px]">
                  {t("produce_title_1")}
                </p>
              </div>
              <div className="w-full flex justify-end max-md:justify-center pt-5">
                <p className="max-w-[456px] max-md:max-w-[358px] text-xl text-[#353644] font-normal max-md:text-center">
                  {t("produce_title_2")}
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
                    {t("produce_icon_1")}
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
                    {t("produce_icon_2")}
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
                    {t("produce_icon_3")}
                  </div>
                </div>
                <div className="col-span-2 max-sm:col-span-5 flex flex-col gap-[48px] max-xl:gap-[36px] max-md:gap-[30px] w-full justify-center items-center border-b sm:border-r border-dashed border-[#353644] py-14 max-xl:py-10 max-md:py-6 px-5 ">
                  <Image
                    src="/svg/p_icon_4.svg"
                    alt="basket"
                    className="w-14 h-14 max-xl:w-12 max-xl:h-12 max-sm:w-12 max-sm:h-12"
                    width="60"
                    height="60"
                    unoptimized={true}
                    priority={true}
                  />{" "}
                  <div className="text-[#353644] text-xl max-xl:text-md max-md:text-sm max-sm:text-md font-semibold text-center">
                    {t("produce_icon_4")}
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
                    {t("produce_icon_5")}
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
                    {t("produce_icon_6")}
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
                    {t("produce_icon_7")}
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
                    {t("produce_icon_8")}
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
                    {t("produce_icon_9")}
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
                    {t("produce_icon_10")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section3" className="bg-[#111111]  relative ">
          <div className=" h-full w-full max-w-[1800px] mx-auto top-0  py-20 max-md:py-10">
            <div className="h-full w-full flex max-md:flex-col gap-6 items-center justify-center ">
              <div className="w-full flex  items-center text-[#cccccc] text-[38px] leading-[52px] max-sm:text-2xl h-[500px] max-xl:h-[400px] max-lg:h-[300px] max-sm:h-[200px] fontRobotoMedium">
                {t("produce_title_3")}
              </div>

              <div className="w-full h-[500px] max-xl:h-[400px] max-lg:h-[300px] max-sm:h-[200px]">
                <Image
                  src="/images/n2.png"
                  alt="basket"
                  className="h-full object-cover object-center w-full"
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
                {t("produce_section_5_title_1")}
              </div>
              <div className="text-[20px] fontRobotoMedium font-medium">
                {t("produce_section_5_text_1")}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale === "kr" ? "kr" : "en", [
      "common",
    ])),
  },
});
