type props = {
  count?: number;
  title?: string;
  subText?: string;
};
const Section4Item = ({ title, subText, count }: props) => {
  return (
    <div
      className={`col-span-3 max-lg:col-span-6  max-sm:border-r-0 ${
        count === 3 ? "border-r-0 max-sm:border-none" : ""
      } ${count === 1 ? "max-lg:border-r-0" : ""} 
            } max-lg:border-b max-sm:col-span-12 w-full px-16  max-xxl:px-12 max-xl:px-8 min-h-full h-[350px] pt-24 max-xxl:pt-16 border-r border-dashed border-gray-600`}
    >
      {" "}
      <div className="text-black  text-[32px] max-lg:text-[28px] max-xxl:text-2xl  leading-9 max-xxl:leading-7 fontRobotoMedium max-w-[301px] h-20">
        {title}
      </div>
      <div className="text-md mb-2 font-medium  fontRobotoRegular mt-3 max-w-[354px]">
        <span className="text-[#353644]">{subText}</span>
      </div>
    </div>
  );
};

export default Section4Item;
