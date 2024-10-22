import { useRecoilValue } from "recoil";
import { mobileMenuAtom } from "../atom";

import HeaderMobileLogoBlack from "./HeaderMobileLogoBlack";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";

const MobileMenu = () => {
  const mobileMenu = useRecoilValue(mobileMenuAtom);

  return (
    <div className={`${mobileMenu ? "" : "hidden"}`} id="mobile-menu">
      <div className="md:hidden space-y-1 pb-3  bg-white absolute top-0 w-full">
        <nav className=" bg-transparent w-full">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <HeaderMobileLogoBlack />
                </div>
                <div className="hidden md:block"></div>
              </div>
              <HeaderMenu type="mobile" color="black" />
            </div>
          </div>
        </nav>
        <div className=" py-7">
          <div className="flex w-full">
            <div className="w-full pl-7">
              <a
                href="#"
                className="block rounded-md px-3 mb-1 py-2 text-md font-semibold text-[#222222] "
              >
                Solutions
              </a>

              <Link
                href="/plant_factory"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                EP Plant Factory
              </Link>
              <Link
                href="/produce"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                EP Produce
              </Link>

              <Link
                href="/distribution"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                EP Distribution
              </Link>
            </div>
            <div className="w-full pl-7">
              <Link
                href="#"
                className="block rounded-md px-3 mb-1 py-2 text-md font-semibold text-[#222222] "
              >
                About Us
              </Link>

              <Link
                href="/who_we_are"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                Who We Are
              </Link>
              <Link
                href="/mission_vision"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                Vision & Mission
              </Link>

              <Link
                href="/partners"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                Partners
              </Link>
            </div>
          </div>

          <div className="flex w-full mt-5">
            <div className="w-full pl-7">
              <Link
                href="#"
                className="block rounded-md px-3 mb-1 py-2 text-md font-semibold text-[#222222] "
              >
                Media
              </Link>

              <Link
                href="/news"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                News & Gallery
              </Link>
              <Link
                href="/faq"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                Faq
              </Link>
            </div>
            <div className="w-full pl-7">
              <Link
                href="#"
                className="block rounded-md px-3 mb-1 py-2 text-md font-semibold text-[#222222] "
              >
                Contact
              </Link>

              <Link
                href="#"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                Contact
              </Link>
              <Link
                href="#"
                className="block rounded-md px-3 py-2  text-sm font-normal text-greyText "
              >
                Recruit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
