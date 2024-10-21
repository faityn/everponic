import HeaderLogo from "./common/HeaderLogo";
import HeaderMenu from "./common/HeaderMenu";
import HeaderMobileLogo from "./common/HeaderMobileLogo";
import MobileMenu from "./common/MobileMenu";

const HeaderNew = () => {
  return (
    <div className=" absolute z-30 w-full flex items-center fontPretendard h-[70px ">
      <nav className=" bg-transparent w-full">
        <div className="mx-auto max-w-[1800px] px-4  sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className={`flex-shrink-0 `}>
                <div className={`max-md:hidden`}>
                  <HeaderLogo />
                </div>
                <div className={`md:hidden`}>
                  <HeaderMobileLogo />
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>
            <HeaderMenu />
          </div>
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
};

export default HeaderNew;
