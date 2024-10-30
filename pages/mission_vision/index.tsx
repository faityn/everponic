import PageBanner2 from "@src/components/Banner/PageBanner2";
import ActionButton from "@src/components/common/ActionButton";
import Layout from "@src/components/Layout";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const Page = () => {
  const { t } = useTranslation("common");
  const BannerInfo = {
    title: "MODULAR CONTAINER\nPLANT FACTORY",
    text: `${t("who_we_are_banner_text")}`,

    img: "/images/b5.png",
  };

  return (
    <Layout>
      <div className="h-full relative notranslate whitespace-pre-line">
        <PageBanner2 info={BannerInfo} />
        <div id="section2" className="bg-white text-black whitespace-pre-line">
          <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
            <div className="flex  max-lg:flex-col-reverse">
              <div className="w-full pr-10">
                <div className="text-[40px] leading-[48px] max-w-[729px] max-lg:text-center">
                  The future business starts here;
                  <br />
                  We grow with you.
                </div>

                <div className="flex justify-end max-lg:justify-center max-w-[729px] mt-16 lg:pr-36">
                  <Link href="#">
                    <ActionButton />
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <div className="flex max-md:flex-col w-full border-b-2 border-dashed border-[#353644] pb-14">
                  <div className="min-w-[167px] max-md:mb-5 text-2xl font-semibold text-primary">
                    {t("mission_section_1_title_1")}
                  </div>
                  <div className="w-full">
                    <div className="text-xl font-medium text-[#232324] mb-3">
                      {t("mission_section_1_subtitle_1")}
                    </div>
                    <div className="text-xl text-greyText font-normal max-w-[584px]">
                      {t("mission_section_1_text_1")}
                    </div>
                  </div>
                </div>

                <div className="flex max-md:flex-col w-full border-b-2 border-dashed border-[#353644] py-14">
                  <div className="min-w-[167px]  max-md:mb-5 text-2xl font-semibold text-primary">
                    {t("mission_section_1_title_2")}
                  </div>
                  <div className="w-full">
                    <div className="text-xl font-medium text-[#232324] mb-3">
                      {t("mission_section_1_subtitle_2")}
                    </div>
                    <div className="text-xl text-greyText font-normal max-w-[584px]">
                      {t("mission_section_1_text_2")}
                    </div>
                  </div>
                </div>

                <div className="flex max-md:flex-col w-full  py-14">
                  <div className="min-w-[167px] max-md:mb-5 text-2xl font-semibold text-primary">
                    {t("mission_section_1_title_3")}
                  </div>
                  <div className="w-full">
                    <div className="text-xl font-medium text-[#232324] mb-3">
                      {t("mission_section_1_subtitle_3")}
                    </div>
                    <div className="text-xl text-greyText font-normal max-w-[584px]">
                      {t("mission_section_1_text_3")}
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

export default Page;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale === "kr" ? "kr" : "en", [
      "common",
    ])),
  },
});
