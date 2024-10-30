import Image from "next/image";
import PageBanner2 from "@src/components/Banner/PageBanner2";
import Layout from "@src/components/Layout";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
            <div className="text-[48px] fontPretendard font-semibold uppercase text-black text-center pb-8">
              WHO WE ARE
            </div>

            <div className="max-w-[1080px] mx-auto text-center fontPretendard  text-[26px] text-[#767676]">
              {t("who_we_are_section_1_text")}
            </div>
          </div>

          <div className="pb-20">
            <Image
              src="/images/w1.png"
              alt="basket"
              className="min-h-[500px] object-cover object-center w-full "
              width="130"
              height="50"
              unoptimized={true}
              priority={true}
            />
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
