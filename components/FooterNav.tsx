import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Nav = () => {
  const { t } = useTranslation("common");
  return (
    <nav
      className={`flex flex-col border-t border-[#1D1D1D] px-5 pt-[90px] h-max bottom-0 mt-auto z-10 top-0 w-full bg-[#111111] fontPretendard notranslate`}
    >
      <div className="flex max-lg:flex-col items-start max-w-[1800px] w-full gap-5 m-auto h-full pb-[60px] ">
        <div className="w-full flex max-lg:justify-center max-sm:px-5">
          <Image
            src="/svg/logo_footer_white.svg"
            alt="basket"
            className=" h-auto w-[366px]  "
            width="366"
            height="56"
            unoptimized={true}
            priority={true}
          />
        </div>
        <div className="w-full flex max-md:flex-col  ">
          <div className="w-full flex max-[350px]:flex-col">
            <div className="min-w-[200px] max-lg:min-w-[200px] max-md:w-full fontPretendard  ">
              <div className="text-md mb-3">Solution</div>
              <div className="text-md mb-3">
                <Link
                  className={` font-normal relative flex items-center group hover:text-primary transition-all duration-300 text-[#BABABA] mb-1`}
                  href="/plant_factory"
                >
                  EP Plant Factory
                </Link>
                <Link
                  className={` font-normal relative flex items-center group hover:text-primary transition-all duration-300 text-[#BABABA] mb-1`}
                  href="/produce"
                >
                  EP Produce
                </Link>
                <Link
                  className={` font-normal relative flex items-center group hover:text-primary transition-all duration-300 text-[#BABABA] mb-1`}
                  href="/distribution"
                >
                  EP Distribution
                </Link>
              </div>
            </div>
            <div className="min-w-[150px] max-md:w-full fontPretendard ">
              <div className="text-md mb-3">About Us</div>
              <Link
                className={` relative flex font-normal items-center group hover:text-primary transition-all duration-300 text-[#BABABA] mb-1`}
                href="/who_we_are"
              >
                {t("Who we are")}
              </Link>
              <Link
                className={` relative flex font-normal items-center group hover:text-primary transition-all duration-300 text-[#BABABA] mb-1`}
                href="/mission_vision"
              >
                {t("Mission_Vision")}
              </Link>
              <Link
                className={` relative flex font-normal items-center group hover:text-primary transition-all duration-300 text-[#BABABA] mb-1`}
                href="/partners"
              >
                {t("Partner")}
              </Link>
            </div>
          </div>
          <div className="w-full flex max-sm:flex-col max-sm:gap-4 whitespace-pre-line">
            <div className="min-w-[200px] max-lg:min-w-[200px] max-md:w-full fontPretendard">
              <div className="text-md mb-3">Media</div>
              <Link
                className={` relative flex font-normal items-center group hover:text-primary transition-all duration-300 text-[#BABABA] mb-1`}
                href="/news"
              >
                News & Gallery
              </Link>
              <Link
                className={` relative flex font-normal items-center group hover:text-primary transition-all duration-300 text-[#BABABA] mb-1`}
                href="/faq"
              >
                FAQ
              </Link>
            </div>
            <div className="min-w-[250px] max-lg:min-w-[200px] max-md:w-full fontPretendard">
              <div className="text-md mb-3">Contact</div>
              {/* <div className="text-md mb-3  font-normal text-[#BABABA]">
                Phone: +82 010 8189 0920
              </div> */}
              <div className="text-md mb-3 font-normal text-[#BABABA]">
                E-mail: {t("email")}
              </div>
              <div className="text-md mb-3 font-normal text-[#BABABA]">
                Address: {t("address")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1D1D1D] flex  max-sm:flex-col-reverse max-sm:justify-center max-sm:text-center max-w-[1800px] w-full m-auto h-full py-3">
        <div className="w-full text-sm font-normal max-sm:mt-3">
          <p>© Copyright 2024 - All Rights Reserved</p>
        </div>
        <div className="flex w-full gap-3 justify-end max-sm:justify-center">
          <Link
            href="https://www.youtube.com/watch?v=ImHVMd_eTDw"
            target="_blank"
          >
            <Image
              src="/images/youtube4.png"
              alt="facebook"
              className=" h-auto w-[34px] max-w-sm object-cover object-center  rounded-lg"
              width="34"
              height="34"
              unoptimized={true}
              priority={true}
            />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=61567884455506"
            target="_blank"
          >
            <Image
              src="/facebook.svg"
              alt="facebook"
              className=" h-auto w-[34px] max-w-sm object-cover object-center  rounded-lg"
              width="34"
              height="34"
              unoptimized={true}
              priority={true}
            />
          </Link>
          <Link
            href="https://www.instagram.com/everponic/profilecard/?igsh=MTZ5eWVvZ2RyNWJsMg=="
            target="_blank"
          >
            <Image
              src="/instagram.svg"
              alt="instagram"
              className=" h-auto w-[34px] max-w-sm object-cover object-center  rounded-lg"
              width="34"
              height="34"
              unoptimized={true}
              priority={true}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kim-chris-36745832a"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              alt="linkedin"
              className=" h-auto w-[34px] max-w-sm object-cover object-center  rounded-lg"
              width="34"
              height="34"
              unoptimized={true}
              priority={true}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
