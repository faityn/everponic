type props = {
  title?: string;
  subText?: string[];
  img?: string;
};
const SectionOneItem = ({ title, subText, img }: props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center border-r border-dashed max-md:border-none border-gray-400 px-5 pt-10 pb-20">
      {" "}
      <div className="mt-16">
        <img
          src={String(img)}
          alt="basket"
          className=" h-[50px]  min-w-[50px] min-h-[50px] w-auto "
          width="50"
          height="50"
          // unoptimized={true}
          // priority={true}
        />{" "}
      </div>
      <div className="text-black text-2xl max-lg:text-md mt-10 mb-2 font-medium">
        {title}
      </div>
      <div className="h-12 ">
        {subText?.map((item, index) => {
          return (
            <div
              key={index}
              className="text-[#353644] text-lg max-lg:text-sm leading-[28px] text-center"
            >
              <span className="text-blue-600">&bull;</span> {item}
            </div>
          );
        })}
        {/* <div className="text-[#353644] text-lg leading-[28px] text-center">
                    <span className="text-blue-600">&bull;</span> 3M x 8.5M x 3M
                </div> */}
      </div>
    </div>
  );
};

export default SectionOneItem;
