import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import PageBanner2 from "@src/components/Banner/PageBanner2";

import Layout from "@src/components/Layout";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
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
        <div id="session_" className="bg-white text-black whitespace-pre-line">
          <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
            <div className="text-[48px] fontVarelmo uppercase text-black text-center pb-8">
              PARTNERS
            </div>

            <div className="max-w-[939px] mx-auto text-center fontPretendard  text-3xl text-[#767676]">
              <div className="mb-10">{t("PARTNERS_text_1")}</div>
              <div className="">{t("PARTNERS_text_2")}</div>
            </div>
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
          <div className=" max-w-[1400px] mx-auto w-full pt-10 pb-24">
            <div className="flex max-md:flex-col justify-between w-full ">
              <div className="full pl-4 ">
                <div className="text-[30px] leading-[40px] max-md:text-center fontVarelmo uppercase text-black  pb-8 ">
                  Contact Us
                </div>
                <div className="text-3xl text-primary mb-5">
                  soo5028@everponic.com
                </div>
                <div className="text-3xl text-black mb-5 font-semibold">
                  WhatsApp
                </div>
                <div className="">
                  <Image
                    src="/images/contact.png"
                    alt="basket"
                    className="h-auto border object-cover object-center w-[140px] "
                    width="130"
                    height="50"
                    unoptimized={true}
                    priority={true}
                  />
                </div>
              </div>
              <div className="full">
                <div className="">
                  {" "}
                  <div className="relative rounded-2xl">
                    <Image
                      src="/images/partner.png"
                      alt="basket"
                      className="h-auto object-cover object-center w-full rounded-2xl "
                      width="100"
                      height="100"
                      unoptimized={true}
                      priority={true}
                    />{" "}
                    <div className=" absolute top-0 rounded-2xl p-5 w-full border h-full">
                      <div className="w-full text-[18px] text-white font-normal mb-3 fontVarelmo max-w-[216px] ">
                        Partner
                        <br /> with us
                      </div>

                      <div className="absolute bottom-3 right-3">
                        <Link
                          href={`https://docs.google.com/forms/d/e/1FAIpQLSfpuO9ymNmZrK7IiY_n4mrNtvqXrU7Ec9MyOBmPz0bXQ_8EEw/viewform`}
                          target="_blank"
                          className=""
                        >
                          <Image
                            src={`/svg/out_link.svg`}
                            alt="basket"
                            className="h-[54px] object-cover object-center w-full rounded-2xl "
                            width="54"
                            height="54"
                            unoptimized={true}
                            priority={true}
                          />{" "}
                        </Link>
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

export default Page;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale === "kr" ? "kr" : "en", [
      "common",
    ])),
  },
});
