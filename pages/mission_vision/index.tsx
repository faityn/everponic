import PageBanner2 from "@src/components/Banner/PageBanner2";
import ActionButton from "@src/components/common/ActionButton";
import Link from "next/link";

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
                    <div className="flex  max-lg:flex-col-reverse">
                        <div className="w-full pr-10">
                            <div className="text-[70px] leading-[78px] max-w-[729px] max-lg:text-center">
                                The future business starts here; we grow with
                                you.
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
                                    Value
                                </div>
                                <div className="w-full">
                                    <div className="text-xl font-medium text-[#232324] mb-3">
                                        Stewardship and Sustainability
                                    </div>
                                    <div className="text-xl text-greyText font-normal max-w-[584px]">
                                        We embrace responsible stewardship of
                                        the land, safeguarding it like a small
                                        island amidst challenging conditions.
                                        Our commitment lies in nurturing plants
                                        even in desert-like environments,
                                        optimizing water usage, and minimizing
                                        our ecological footprint.
                                    </div>
                                </div>
                            </div>

                            <div className="flex max-md:flex-col w-full border-b-2 border-dashed border-[#353644] py-14">
                                <div className="min-w-[167px]  max-md:mb-5 text-2xl font-semibold text-primary">
                                    Mission
                                </div>
                                <div className="w-full">
                                    <div className="text-xl font-medium text-[#232324] mb-3">
                                        Empowering Growth
                                    </div>
                                    <div className="text-xl text-greyText font-normal max-w-[584px]">
                                        Our mission is to empower farmers and
                                        communities by providing an innovative
                                        modular container plant factory. We
                                        strive to cultivate nutritious crops
                                        sustainably, even in challenging
                                        climates and water-scarce conditions
                                        such as small islands and arid deserts.
                                    </div>
                                </div>
                            </div>

                            <div className="flex max-md:flex-col w-full  py-14">
                                <div className="min-w-[167px] max-md:mb-5 text-2xl font-semibold text-primary">
                                    Vision
                                </div>
                                <div className="w-full">
                                    <div className="text-xl font-medium text-[#232324] mb-3">
                                        From Desert to Oasis
                                    </div>
                                    <div className="text-xl text-greyText font-normal max-w-[584px]">
                                        We envision transforming barren spaces
                                        into thriving oases. Through
                                        cutting-edge technology, efficient
                                        practices, and a commitment to
                                        sustainability, we aim to create lush,
                                        productive environments where plants
                                        flourish, even against the odds.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
