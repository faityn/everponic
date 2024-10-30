import Image from "next/image";
import Link from "next/link";

type props = {
  id?: number;
  title?: string;
  outlink?: string;
  img?: string;
};
const OneItem = ({ title, outlink, img }: props) => {
  return (
    <div className="col-span-2 max-xl:col-span-5 max-sm:col-span-10">
      {" "}
      <div className="relative rounded-2xl">
        <Image
          src={String(img)}
          alt="basket"
          className="h-[280px] object-cover object-center w-full rounded-2xl "
          width="100"
          height="100"
          unoptimized={true}
          priority={true}
        />{" "}
        <div className=" absolute top-0 rounded-2xl p-5 w-full border h-full">
          <div className="w-full text-[18px] text-white font-normal mb-3 fontVarelmo max-w-[216px] ">
            {title}{" "}
          </div>

          <div className="absolute bottom-3 right-3">
            <Link href={`${outlink}`} target="_blank" className="">
              <Image
                src={`/svg/out_link.svg`}
                alt="basket"
                className="h-[54px] object-cover object-center w-full rounded-2xl "
                width="54"
                height="54"
                unoptimized={true}
                priority={true}
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneItem;
