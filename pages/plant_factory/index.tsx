import PageBanner from "@src/components/Banner/PageBanner";
import Layout from "@src/components/Layout";
import SectionOneItem from "@src/components/PlantFactory/SectionOneItem";
import SectionThreeItem from "@src/components/PlantFactory/SectionThreeItem";
import SectionTwoItem from "@src/components/PlantFactory/SectionTwoItem";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const BannerInfo = {
  title: "PLANT FACTORY",
  text:
    "Hydroponic vertical system maximizes cultivation space  to increase yields and minimizes water consumption by water cycling system.\n By utilizing ICT technology and an automated control system, we are able to\n produce always Fresh plants in an optimized environment.",

  img: "/images/p1.png",
};

const BannerInfoKo = {
  title: "PLANT FACTORY",
  text:
    "수경 수직 시스템은 수확량을 늘리기 위해 재배 공간을 극대화하고\n 물 순환 시스템으로 물 소비를 최소화합니다.\n ICT 기술과 자동 제어 시스템을 활용하여 최적화된 환경에서\n 항상 신선한 식물을 생산할 수 있습니다. ",
  img: "/images/p1.png",
};

const Page = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");

  const itemList = [
    {
      title: `${t("Dimensions")}`,
      subText: ["2.438M x 12.192M x 2.896M", "3M x 8.5M x 3M"],
      img: "/images/a11.gif",
    },
    {
      title: `${t("Weight")}`,
      subText: [`${t("factory_icon_subtext_2")}`],
      img: "/images/a22.gif",
    },
    {
      title: `${t("Power Usage")}`,
      subText: [`${t("factory_icon_subtext_3")}`],
      img: "/images/a33.gif",
    },
    {
      title: `${t("Water Usage")}`,
      subText: [`${t("factory_icon_subtext_4")}`],
      img: "/images/a44.gif",
    },
  ];

  const itemList2 = [
    {
      title: "Stacked container ",
      subText: `${t("factory_section_3_subtext_1")}`,
      img: "/images/p5.png",
    },
    {
      title: "Scalable Operation ",
      subText: `${t("factory_section_3_subtext_2")}`,
      img: "/images/p6.png",
    },
    {
      title: "Central Workstation ",
      subText: `${t("factory_section_3_subtext_3")}`,
      img: "/images/p7.png",
    },
  ];

  const itemList3 = [
    {
      title: "Easy Control",
      subText: `${t("Easy Control Text")}`,
      img: "/images/a5.gif",
    },
    {
      title: "Year-Round Production",
      subText: `${t("Year-Round Production Text")}`,
      img: "/images/a6.gif",
    },
    {
      title: "Minimal Water Usage",
      subText: `${t("Minimal Water Usage Text")}`,
      img: "/images/a7.gif",
    },
    {
      title: "Work Efficiency",
      subText: `${t("Work Efficiency Text")}`,
      img: "/images/a8.gif",
    },
    {
      title: "Less pesticides",
      subText: `${t("Less Pesticides Text")}`,
      img: "/images/a9.gif",
    },
    {
      title: "High Quality & Yields",
      subText: `${t("High Quality & Yields Text")}`,
      img: "/images/a10.gif",
    },
  ];
  return (
    <Layout>
      <div className="h-full relative notranslate whitespace-pre-line">
        <PageBanner info={locale === "en" ? BannerInfo : BannerInfoKo} />

        <div id="session_" className="   flex w-full max-md:flex-col">
          {itemList?.map((item, index) => {
            return (
              <SectionOneItem
                key={index}
                title={item?.title}
                subText={item?.subText}
                img={item?.img}
              />
            );
          })}
        </div>

        <div className="min-h-[600px] h-[600px] max-md:min-h-[800px] relative border">
          <Image
            src="/images/p2.png"
            alt="basket"
            className=" h-full object-cover object-center w-full"
            width="1000"
            height="400"
            unoptimized={true}
            priority={true}
          />
          <div className="absolute h-full w-full bg-black/80 top-0 flex max-md:flex-col gap-6 items-center justify-center px-8 ">
            <div className=" ">
              <Image
                src="/images/p3.png"
                alt="basket"
                className=" object-cover object-center w-full"
                width="500"
                height="250"
                unoptimized={true}
                priority={true}
              />
            </div>

            <div className="">
              <Image
                src="/images/p4.png"
                alt="basket"
                className=" object-cover object-center w-full"
                width="500"
                height="250"
                unoptimized={true}
                priority={true}
              />
            </div>
          </div>
        </div>

        <div className="fontPretendard max-w-[1800px] mx-auto w-full pt-28 pb-20">
          <div className="flex pb-20 max-lg:flex-col">
            <div className="max-w-[800px] w-full max-lg:max-w-full">
              <div className="text-black text-[48px] leading-[57px] max-md:text-[32px] max-md:leading-[38px] font-semibold max-lg:text-center mb-5">
                {t("Modular Hydroponic Vertical Container")}
              </div>
            </div>
            <div className="w-full ">
              <div className="flex gap-3 max-md:flex-col">
                <div className="w-full ">
                  <div className="text-xl text-black mb-3 max-md:text-center font-semibold">
                    {t("Environmental Control")}
                  </div>
                  <div className="max-w-[280px] text-lg leading-[25px] text-greyText max-md:mx-auto max-md:text-center">
                    {t("Modular_text_1")}
                  </div>
                </div>
                <div className="w-full ">
                  <div className="text-xl text-black mb-3 max-md:text-center font-semibold">
                    {t("Space Efficiency")}
                  </div>
                  <div className="max-w-[280px] text-lg leading-[25px] text-greyText max-md:mx-auto max-md:text-center">
                    {t("Modular_text_2")}
                  </div>
                </div>
                <div className="w-full ">
                  <div className="text-xl text-black mb-3 max-md:text-center font-semibold">
                    {t("Other Features")}
                  </div>
                  <div className="max-w-[280px] text-lg leading-[25px] text-greyText max-md:mx-auto max-md:text-center">
                    {t("Modular_text_3")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 max-md:flex-col">
            {" "}
            {itemList2?.map((item, index) => {
              return (
                <SectionTwoItem
                  key={index}
                  title={item?.title}
                  subText={item?.subText}
                  img={item?.img}
                />
              );
            })}
          </div>
        </div>

        <div className="bg-[#111111]">
          <div className="fontPretendard max-w-[1800px] mx-auto w-full pt-28 pb-24">
            <div className="flex max-md:flex-col">
              <div className="w-full ">
                <p className="text-[48px] leading-[57px] max-w-[648px] max-md:max-w-[358px] max-md:mx-auto font-medium text-[#cccccc] max-md:text-center max-md:text-[32px] max-md:leading-[38px]">
                  {t("Modular Hydroponic Vertical Container")}
                </p>
              </div>
              <div className="w-full flex justify-end max-md:justify-center pt-5">
                <p className="max-w-[550px] max-md:max-w-[358px] text-xl text-[#cccccc] max-md:text-center">
                  If you use EVERPONIC system…!
                  <br />
                  Harvest highly nutritious fresh plants on small land, with
                  less labor and minimal water usage throughout the year.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-12 gap-5">
                {itemList3?.map((item, index) => {
                  return (
                    <SectionThreeItem
                      key={index}
                      title={item?.title}
                      subText={item?.subText}
                      img={item?.img}
                    />
                  );
                })}
              </div>
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
