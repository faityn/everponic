import HeaderLogo from "./common/HeaderLogo";
import HeaderMenu from "./common/HeaderMenu";
import HeaderMobileLogo from "./common/HeaderMobileLogo";
import MobileMenu from "./common/MobileMenu";

const HeaderWhite = () => {
  return (
    <div className=" absolute z-30 w-full flex items-center fontPretendard h-[70px notranslate">
      <nav className=" bg-transparent w-full">
        <div className="mx-auto max-w-[1800px] px-4 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className={`flex-shrink-0 `}>
                <div className={`max-md:hidden`}>
                  <HeaderLogo type="mini" color="black" />
                </div>
                <div className={`md:hidden`}>
                  <HeaderMobileLogo color="black" />
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>
            <HeaderMenu color="black" />
          </div>
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
};

export default HeaderWhite;
