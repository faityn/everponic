import Image from "next/image";
import PageBanner2 from "@src/components/Banner/PageBanner2";

const Page = () => {
    const BannerInfo = {
        title: "MODULAR CONTAINER\nPLANT FACTORY",
        text: "Is designed to enable the production  of always\nFRESH plants accessible to",
        white_text: "“anyone, anytime, anywhere”.",

        img: "/images/b5.png",
    };

    return (
        <div className="h-full relative">
            <PageBanner2 info={BannerInfo} />
            <div
                id="section2"
                className="bg-white text-black whitespace-pre-line"
            >
                <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
                    <div className="text-[48px] fontVarelmo uppercase text-black text-center pb-8">
                        WHO WE ARE
                    </div>

                    <div className="max-w-[1080px] mx-auto text-center fontPretendard  text-3xl text-[#767676]">
                        EVERPONIC provides{" "}
                        <span className="text-black font-medium">
                            modular indoor plant factory
                        </span>{" "}
                        capable of producing sustainable fresh crops. Our system
                        is designed for easy operation by users. Furthermore,
                        EVERPONIC enables consumers and businesses to directly
                        receive the
                        <span className="text-black font-medium">
                            {" "}
                            fresh vegetables and herbs{" "}
                        </span>
                        they desire through planned production and cultivation.
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
    );
};

export default Page;
