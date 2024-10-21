type props = {
  title?: string;
  subText?: string;
  img?: string;
};
const SectionThreeItem = ({ title, subText, img }: props) => {
  return (
    <div className="col-span-4 max-lg:col-span-6 max-sm:col-span-12 bg-[#1D1D1D] rounded-2xl p-7 ">
      {" "}
      <div className="flex justify-end w-full pr-5 ">
        <div className="w-[60px] ">
          <img
            src={String(img)}
            alt="basket"
            className={`w-auto h-[70px] object-cover object-center `}
            width="100"
            height="100"
          />{" "}
        </div>
      </div>
      <div className="text-white text-xl mb-2 font-medium ">{title} </div>
      <div className="text-[#cccccc]">{subText}</div>
    </div>
  );
};

export default SectionThreeItem;
