import "react-multi-carousel/lib/styles.css";
import PageBanner from "@src/components/Banner/PageBanner";

import Image from "next/image";
import Layout from "@src/components/Layout";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page = () => {
  const { t } = useTranslation("common");
  const BannerInfo = {
    title: "Distribution",
    text: `${t("distribution_banner_text")}`,

    white_text_type: "start",
    img: "/images/b4.png",
  };
  const section1itemList = [
    {
      title: "Purchase\nAgreement",
      number: "1",
      image: "/images/d1.jpg",
    },
    {
      title: "Order\n&\nManufacturing",
      number: "2",
      image: "/images/d2.jpg",
    },
    {
      title: "Transport\n&\nDelivery",
      number: "3",
      image: "/images/d3.jpg",
    },
    {
      title: "Construction",
      number: "4",
      image: "/images/d4.jpg",
    },
    {
      title: "Operation\nTest",
      number: "5",
      image: "/images/d5.jpg",
    },
    {
      title: "Operation\n&\nProduction",
      number: "6",
      image: "/images/d6.jpg",
    },
  ];
  return (
    <Layout>
      <div className="h-full relative notranslate whitespace-pre-line">
        <PageBanner info={BannerInfo} />
        <div id="session_" className="bg-white text-black whitespace-pre-line">
          <div className=" max-w-[1800px] mx-auto w-full pt-28 pb-24">
            <div className="text-[48px] font-semibold uppercase text-black text-center pb-20">
              How to Partner
            </div>
            <div className="grid grid-cols-12 ">
              {section1itemList?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-2 max-lg:col-span-4 max-sm:col-span-12 max-sm:mb-2 bg-white relative justify-center border-r border-dashed border-black w-full "
                  >
                    <Image
                      src={`${item.image}`}
                      alt="basket"
                      className="min-h-[610px] max-sm:min-h-[410px] object-cover object-center w-full "
                      width="130"
                      height="50"
                      unoptimized={true}
                      priority={true}
                    />
                    <div className=" absolute h-full w-full sm:bg-white max-sm:bg-black/40 hover:bg-black/40 top-0 pt-14 pb-14 text-black hover:text-white">
                      <div className="w-full text-center text-[#E4E4E4] text-[32px] fontRobotoMedium">
                        STEP{" "}
                      </div>
                      <div className="fontBSSDRegular text-[300px] max-sm:text-[130px] max-sm:leading-[150px] leading-[330px] w-full text-center  text-[#E4E4E4] hover:text-[#0075FF] max-sm:text-[#0075FF]">
                        {" "}
                        {item?.number}
                      </div>

                      <div className="w-full text-center text-[32px] leading-[36px] fontRobotoMedium max-sm:text-white px-2">
                        {item?.title}
                      </div>
                    </div>
                  </div>
                );
              })}
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
