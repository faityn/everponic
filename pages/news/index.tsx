import PageBanner2 from "@src/components/Banner/PageBanner2";

import OneItem from "@src/components/News/OneItem";
import SectionTwoItem from "@src/components/News/SectionTwoItem";

const Page = () => {
    const BannerInfo = {
        title: "MODULAR CONTAINER\nPLANT FACTORY",
        text: "Is designed to enable the production  of always\nFRESH plants accessible to",
        white_text: "“anyone, anytime, anywhere”.",

        img: "/images/b5.png",
    };
    const itemList = [
        {
            title: "We envision transforming barren spaces into thriving oasis.",
            subText: "Other / June 3, 2024",
            img: "/images/d3.jpg",
        },
        {
            title: "We embrace responsible stewardship of the land, safeguarding it like a small island amidst...",
            subText: "Other / June 3, 2024",
            img: "/images/d5.jpg",
        },
        {
            title: "We embrace responsible stewardship of the land, safeguarding it like a small island amidst...",
            subText: "Other / June 3, 2024",
            img: "/images/b4.png",
        },
        {
            title: "We embrace responsible stewardship of the land, safeguarding it like a small island amidst...",
            subText: "Other / June 3, 2024",
            img: "/images/d1.jpg",
        },
    ];

    const itemList2 = [
        {
            title: "We envision transforming barren spaces into thriving oasis.",
            subText: "Other / June 3, 2024",
            img: "/images/d2.jpg",
        },
        {
            title: "We embrace responsible stewardship of the land, safeguarding it like a small island amidst...",
            subText: "Other / June 3, 2024",
            img: "/images/d5.jpg",
        },
        {
            title: "We embrace responsible stewardship of the land, safeguarding it like a small island amidst...",
            subText: "Other / June 3, 2024",
            img: "/images/d4.jpg",
        },
        {
            title: "We embrace responsible stewardship of the land, safeguarding it like a small island amidst...",
            subText: "Other / June 3, 2024",
            img: "/images/d3.jpg",
        },
        {
            title: "We embrace responsible stewardship of the land, safeguarding it like a small island amidst...",
            subText: "Other / June 3, 2024",
            img: "/images/p8.png",
        },
        {
            title: "We embrace responsible stewardship of the land, safeguarding it like a small island amidst...",
            subText: "Other / June 3, 2024",
            img: "/images/w1.png",
        },
    ];
    return (
        <div className="h-full relative">
            <PageBanner2 info={BannerInfo} />
            <div
                id="section1"
                className="bg-white text-black whitespace-pre-line"
            >
                <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
                    <div className="text-[48px] fontVarelmo uppercase text-black text-center pb-8">
                        NEWS
                    </div>
                    <div className=" grid grid-cols-12 gap-5">
                        {itemList?.map((item, index) => {
                            return (
                                <OneItem
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

            <div
                id="section2"
                className="bg-black text-black whitespace-pre-line"
            >
                <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
                    <div className="text-[48px] fontVarelmo uppercase text-white text-center pb-8">
                        Gallery
                    </div>
                    <div className=" grid grid-cols-12 gap-5">
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
            </div>
        </div>
    );
};

export default Page;
