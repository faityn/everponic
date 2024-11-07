import Image from "next/image";

const ActionButtonWhite = () => {
  return (
    <div className="">
      <Image
        src="/images/action_button_white.png"
        alt="basket"
        className="w-auto h-auto max-sm:h-[40px] "
        width="54"
        height="54"
        unoptimized={true}
        priority={true}
      />
    </div>
  );
};

export default ActionButtonWhite;
