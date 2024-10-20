import Image from "next/image";
import Link from "next/link";

type props = {
    title?: string;
    subText?: string;
    img?: string;
};
const OneItem = ({ title, subText, img }: props) => {
    return (
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-6 max-sm:col-span-12">
            {" "}
            <div>
                <Image
                    src={String(img)}
                    alt="basket"
                    className="h-[280px] object-cover object-center w-full  "
                    width="100"
                    height="100"
                    unoptimized={true}
                    priority={true}
                />{" "}
            </div>
            <div className="">
                <div className="text-md text-slate-500 mb-3 font-normal mt-2">
                    {subText}
                </div>
                <div className="text-[18px] text-[#353644] font-medium mb-3">
                    {title}{" "}
                </div>

                <div>
                    <Link href="#" className="text-slate-500">
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OneItem;