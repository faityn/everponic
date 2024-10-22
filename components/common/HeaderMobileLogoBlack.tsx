import Link from "next/link";
import Image from "next/image";

const HeaderMobileLogoBlack = () => {
  return (
    <div className="flex flex-shrink-0 fon items-center max-sm:text-lg text-2xl text-primary mr-4 max-md:ml-3">
      <Link href="/">
        <Image
          src="/svg/logo_head_mini_black.svg"
          alt="basket"
          className="max-sm:w-12 h-auto w-10 max-w-sm object-cover object-center "
          width="130"
          height="50"
          unoptimized={true}
          priority={true}
        />
      </Link>
    </div>
  );
};

export default HeaderMobileLogoBlack;
