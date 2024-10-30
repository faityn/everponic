import "react-multi-carousel/lib/styles.css";
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
            <div className="text-[48px] fontVarelmo uppercase text-black text-center pb-8">
              PARTNERS
            </div>

            <div className="max-w-[939px] mx-auto text-center fontPretendard  text-3xl text-[#767676]">
              <div className="mb-10">{t("PARTNERS_text_1")}</div>
              <div className="">{t("PARTNERS_text_2")}</div>
            </div>

            <div className="relative mt-10"></div>
          </div>

          <div className="pb-20">
            <Image
              src="/images/pa2.png"
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
