import Link from "next/link";
import Image from "next/image";

const HeaderLogoBlack = () => {
  return (
    <div className="flex flex-shrink-0 fon items-center max-sm:text-lg text-2xl text-primary mr-4 max-md:ml-3">
      <Link href="/">
        <Image
          src="/svg/logo_mobile_black.svg"
          alt="basket"
          className="max-sm:w-16 h-auto w-16 object-cover object-center "
          width="130"
          height="50"
          unoptimized={true}
          priority={true}
        />
      </Link>
    </div>
  );
};

export default HeaderLogoBlack;
