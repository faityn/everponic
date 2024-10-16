import Image from "next/image";
import { bannerInfoType } from "../types";
import Link from "next/link";

type props = {
    info: bannerInfoType;
};
const PageBanner2 = ({ info }: props) => {
    return (
        <div className=" w-full h-full min-h-[500px] relative rounded-b-[34px] whitespace-pre-line">
            {info.img ? (
                <Image
                    src={`${info.img}`}
                    alt={`${info.title}`}
                    className="min-h-[500px] object-cover object-center w-full rounded-b-[34px]"
                    width="130"
                    height="50"
                    unoptimized={true}
                    priority={true}
                />
            ) : (
                ""
            )}

            <div className="absolute h-full w-full bg-[#000000d9] top-0 flex flex-col items-center justify-center rounded-b-[44px]">
                <div className="  flex gap-3 items-center mb-4">
                    <div className="uppercase text-[70px] leading-[78px] max-md:text-[32px] max-md:leading-[41px] text-white fontVarelmo text-center">
                        {info.title}
                    </div>
                </div>

                <div className="text-center max-w-[1030px] text-[30px] leading-[48px] max-xl:text-[26px] max-xl:leading-[40px] max-sm:text-xl text-[#cccccc] fontPretendard font-normal">
                    {info.white_text_type === "start" ? (
                        <div>
                            <span className="text-white font-medium">
                                {info.white_text}
                            </span>{" "}
                            {info.text}
                        </div>
                    ) : (
                        <div>
                            {" "}
                            {info.text}{" "}
                            <span className="text-white font-medium">
                                {info.white_text}
                            </span>
                        </div>
                    )}
                </div>
                <div className="absolute right-10 bottom-10 max-lg:hidden">
                    <Link href="#">
                        <Image
                            src="/images/learn_more.png"
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

export default PageBanner2;
