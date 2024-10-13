import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={"/2.png"} width={450} height={400} alt="" />
    </div>
  );
};

export default Avatar;
