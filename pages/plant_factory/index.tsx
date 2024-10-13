import SectionOneItem from "@src/components/PlantFactory/SectionOneItem";
import SectionThreeItem from "@src/components/PlantFactory/SectionThreeItem";
import SectionTwoItem from "@src/components/PlantFactory/SectionTwoItem";
import Image from "next/image";

const itemList = [
    {
        title: "Dimensions",
        subText: ["2.438M x 12.192M x 2.896M", "3M x 8.5M x 3M"],
        img: "/svg/s1.svg",
    },
    {
        title: "Weight",
        subText: ["4 ~ 6 Ton"],
        img: "/svg/s2.svg",
    },
    {
        title: "Power Usage",
        subText: ["100 ~ 200 kWh/day (avg.)"],
        img: "/svg/s3.svg",
    },
    {
        title: "Water Usage",
        subText: ["200 ~ 400 liter/month (avg.)"],
        img: "/svg/s4.svg",
    },
];

const itemList2 = [
    {
        title: "Stacked container ",
        subText: "(~105m2)",
        img: "/images/p5.png",
    },
    {
        title: "Central Workstation ",
        subText: "(~330m2)",
        img: "/images/p6.png",
    },
    {
        title: "Scalable Operation ",
        subText: "(~158m2)",
        img: "/images/p7.png",
    },
];

const itemList3 = [
    {
        title: "Easy Control",
        subText:
            "Easy to use and manage multiple devices (PH&EC concentration controller, Ventilation fan, LED, Temperature, Humidity, Watering system) that will enable you to automate your cultivation with a few simple clicks, anytime/anywhere.",
        img: "/svg/m1.svg",
    },
    {
        title: "Year-Round Production",
        subText:
            "Our system allows for the cultivation of a variety of fresh crops throughout the year in a container that is independent of external conditions, regardless of geographical location and external climate conditions.",
        img: "/svg/m2.svg",
    },
    {
        title: "Minimal Water Usage",
        subText:
            "Water cycling system can reduce water usage by more than 90% compared to conventional farming methods.",
        img: "/svg/m3.svg",
    },
    {
        title: "Work Efficiency",
        subText:
            "Vertical growing tower allows workers at ground level to access and care for crops at all heights, eliminating the need for a scissor lift. Also, crop choices can be expanded.",
        img: "/svg/m4.svg",
    },
    {
        title: "Less pesticides",
        subText:
            "All produce is grown without the use of pesticides, herbicides or synthetic fertilizers.",
        img: "/svg/m5.svg",
    },
    {
        title: "High Quality & Yields",
        subText:
            "Possible to produce high quality & yields of plants annually in a container, which is equivalent to the effect of more than about 4,000 ft2 (100평) of traditional open field farming. This maximizes space efficiency.",
        img: "/svg/m6.svg",
    },
];
const Page = () => {
    return (
        <div className="h-full relative">
            <div className=" w-full h-full min-h-[500px] relative rounded-b-[34px]">
                <Image
                    src="/images/p1.png"
                    alt="basket"
                    className="min-h-[500px] object-cover object-center w-full rounded-b-[34px]"
                    width="130"
                    height="50"
                    unoptimized={true}
                    priority={true}
                />

                <div className="absolute h-full w-full bg-black/80 top-0 flex flex-col items-center justify-center rounded-b-[34px]">
                    <div className="  flex gap-3 items-center">
                        <div className=" leading-[62px]">
                            <Image
                                src="/svg/logo.svg"
                                alt="basket"
                                className="w-[83px] h-[34px] max-sm:w-[57px] max-sm:h-[24px] object-cover object-center "
                                width="83"
                                height="34"
                                unoptimized={true}
                                priority={true}
                            />{" "}
                        </div>

                        <div className=" text-[48px] leading-[62px] max-sm:text-[32px] max-sm:leading-[41px] text-primary fontRobotoMedium">
                            PLANT FACTORY
                        </div>
                    </div>

                    <div className="text-center max-w-[1030px] text-[30px] leading-[48px] max-xl:text-[26px] max-xl:leading-[40px] max-sm:text-xl text-[#cccccc] fontPretendard font-normal">
                        Hydroponic vertical system maximizes cultivation space
                        to increase yields and minimizes water consumption by
                        water cycling system.
                        <br />
                        By utilizing ICT technology and an automated control
                        system, we are able to produce always{" "}
                        <span className="text-white">
                            Fresh plants in an optimized environment.
                        </span>
                    </div>
                </div>
            </div>

            <div className="   flex w-full max-md:flex-col">
                {itemList?.map((item, index) => {
                    return (
                        <SectionOneItem
                            key={index}
                            title={item?.title}
                            subText={item?.subText}
                            img={item?.img}
                        />
                    );
                })}
            </div>

            <div className="min-h-[600px] h-[600px] max-md:min-h-[800px] relative border">
                <Image
                    src="/images/p2.png"
                    alt="basket"
                    className=" h-full object-cover object-center w-full"
                    width="1000"
                    height="400"
                    unoptimized={true}
                    priority={true}
                />
                <div className="absolute h-full w-full bg-black/80 top-0 flex max-md:flex-col gap-6 items-center justify-center px-8 ">
                    <div className=" ">
                        <Image
                            src="/images/p3.png"
                            alt="basket"
                            className=" object-cover object-center w-full"
                            width="500"
                            height="250"
                            unoptimized={true}
                            priority={true}
                        />
                    </div>

                    <div className="">
                        <Image
                            src="/images/p4.png"
                            alt="basket"
                            className=" object-cover object-center w-full"
                            width="500"
                            height="250"
                            unoptimized={true}
                            priority={true}
                        />
                    </div>
                </div>
            </div>

            <div className="fontPretendard max-w-[1800px] mx-auto w-full pt-28 pb-20">
                <div className="flex pb-20 max-lg:flex-col">
                    <div className="max-w-[800px] w-full max-lg:max-w-full">
                        <div className="text-black text-[48px] leading-[57px] max-md:text-[32px] max-md:leading-[38px] font-semibold max-lg:text-center mb-5">
                            Modular Hydroponic <br />
                            Vertical Container
                        </div>
                    </div>
                    <div className="w-full ">
                        <div className="flex gap-3 max-md:flex-col">
                            <div className="w-full ">
                                <div className="text-xl text-black mb-3 max-md:text-center">
                                    (Environmental Control)
                                </div>
                                <div className="max-w-[280px] text-lg leading-[25px] text-greyText max-md:mx-auto max-md:text-center">
                                    Independent environment from external
                                    factors (Easy environment control & Energy
                                    saving)
                                </div>
                            </div>
                            <div className="w-full ">
                                <div className="text-xl text-black mb-3 max-md:text-center">
                                    (Space Efficiency)
                                </div>
                                <div className="max-w-[280px] text-lg leading-[25px] text-greyText max-md:mx-auto max-md:text-center">
                                    Multi-layer stacking enables maximum space
                                    utilization and Easy assembly & disassembly
                                    (Easy Scale up and down)
                                </div>
                            </div>
                            <div className="w-full ">
                                <div className="text-xl text-black mb-3 max-md:text-center">
                                    (Other Features)
                                </div>
                                <div className="max-w-[280px] text-lg leading-[25px] text-greyText max-md:mx-auto max-md:text-center">
                                    Strong and durable container (no risk of
                                    breakage & easy to move)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 max-md:flex-col">
                    {" "}
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

            <div className="bg-[#111111]">
                <div className="fontPretendard max-w-[1800px] mx-auto w-full pt-28 pb-24">
                    <div className="flex max-md:flex-col">
                        <div className="w-full ">
                            <p className="text-[48px] leading-[57px] max-w-[648px] max-md:max-w-[358px] max-md:mx-auto font-medium text-[#cccccc] max-md:text-center max-md:text-[32px] max-md:leading-[38px]">
                                Modular Hydroponic  Vertical Container
                            </p>
                        </div>
                        <div className="w-full flex justify-end max-md:justify-center pt-5">
                            <p className="max-w-[550px] max-md:max-w-[358px] text-xl text-[#cccccc] max-md:text-center">
                                If you use EVERPONIC system…!
                                <br />
                                Harvest highly nutritious fresh plants on small
                                land, with less labor and minimal water usage
                                throughout the year.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <div className="grid grid-cols-12 gap-5">
                            {itemList3?.map((item, index) => {
                                return (
                                    <SectionThreeItem
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
        </div>
    );
};

export default Page;
