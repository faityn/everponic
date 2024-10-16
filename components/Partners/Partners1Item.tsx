import Image from "next/image";

type props = {
    count?: number;
    title?: string;
    img?: string;
};
const Section5Item = ({ img }: props) => {
    return (
        <div
            className={`w-full h-[130px] px-5 flex items-center justify-center shadow-2 border-dashed border-r border-black`}
        >
            <div>
                <Image
                    width={0}
                    height={0}
                    src={`${img}`}
                    alt="Logo"
                    className="w-[231px] h-[65px] "
                    unoptimized={true}
                    priority
                />
            </div>
        </div>
    );
};

export default Section5Item;
