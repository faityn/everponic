import Image from "next/image";

type props = {
    count?: number;
    title?: string;
    img?: string;
};
const Section5Item = ({ title, img }: props) => {
    return (
        <div
            className={`w-full h-[243px] max-xsm:h-[243px] rounded-xl  shadow-2`}
        >
            <div>
                <Image
                    width={0}
                    height={0}
                    src={`${img}`}
                    alt="Logo"
                    className="w-[243px] h-[200px] max-xsm:w-[200px] max-xsm:h-[200px]"
                    unoptimized={true}
                    priority
                />
            </div>
            <div className="text-black text-center text-xl fontRobotoRegular mt-4">
                {title}{" "}
            </div>
        </div>
    );
};

export default Section5Item;
