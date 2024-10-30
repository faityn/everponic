import Image from "next/image";

type props = {
  title?: string;
  subText?: string;
  img?: string;
};
const SectionTwoItem = ({ title, subText, img }: props) => {
  return (
    <div className="w-full ">
      {" "}
      <div>
        <Image
          src={String(img)}
          alt="basket"
          className="w-full h-full object-cover object-center "
          width="100"
          height="100"
          unoptimized={true}
          priority={true}
        />{" "}
      </div>
      <div className="text-[#353644] text-xl mb-2 font-medium text-center">
        {title} <span className="text-[#353644]">{subText}</span>
      </div>
    </div>
  );
};

export default SectionTwoItem;
