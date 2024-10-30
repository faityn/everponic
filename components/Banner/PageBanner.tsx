import Image from "next/image";
import { bannerInfoType } from "../types";
import Link from "next/link";

type props = {
  info: bannerInfoType;
};
const PageBanner = ({ info }: props) => {
  return (
    <div className=" w-full h-full min-h-[500px] max-h-[800px] relative rounded-b-[34px] whitespace-pre-line">
      {info.img ? (
        <Image
          src={`${info.img}`}
          alt="basket"
          className="min-h-[500px] max-h-[800px]  object-cover object-center w-full rounded-b-[34px]"
          width="130"
          height="50"
          unoptimized={true}
          priority={true}
        />
      ) : (
        ""
      )}

      <div className="absolute h-full w-full bg-black/80 top-0 flex flex-col items-center justify-center rounded-b-[34px]">
        <div className="  flex gap-3 items-center mb-4">
          <div className=" leading-[62px]">
            <Image
              src="/svg/logo_head_mini_white.svg"
              alt="basket"
              className="w-[83px] h-[34px] max-sm:w-[57px] max-sm:h-[24px] object-cover object-center "
              width="83"
              height="34"
              unoptimized={true}
              priority={true}
            />{" "}
          </div>

          <div className="uppercase text-[48px] leading-[62px] max-sm:text-[32px] max-sm:leading-[41px] text-primary fontRobotoMedium">
            {info.title}
          </div>
        </div>

        <div className="text-center max-w-[1030px] text-[30px] leading-[48px] max-xl:text-[26px] max-xl:leading-[40px] max-sm:text-xl text-[#cccccc] fontPretendard font-normal">
          <div>{info.text}</div>
        </div>
        <div className="absolute right-10 bottom-10 max-lg:hidden">
          <Link href="#">
            <Image
              src="/images/learn_more.gif"
              alt="learn_more"
              className="max-w-[100px] max-h-[100px] object-cover object-center w-full "
              width="109"
              height="109"
              unoptimized={true}
              priority={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
