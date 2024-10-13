import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {

  return (
    <div className="flex flex-shrink-0 fon items-center max-sm:text-lg text-2xl text-primary mr-4 max-md:ml-3">
     
        <Link href="/">
          <Image
            src="/logo-white.svg"
            alt="basket"
            className="max-sm:w-24 h-auto w-40 max-w-sm object-cover object-center "
            width="130"
            height="50"
            unoptimized={true}
            priority={true}
          />
        </Link>
      
    </div>
  );
};

export default HeaderLogo;
