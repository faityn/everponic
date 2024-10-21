import HeaderLogoBlack from "./common/HeaderLogoBlack";
import HeaderMenuBlackD from "./common/HeaderMenuBlackD";
import MobileMenu from "./common/MobileMenu";

const HeaderWhite = () => {
  return (
    <div className=" absolute z-30 w-full flex items-center fontPretendard h-[70px ">
      <nav className=" bg-transparent w-full">
        <div className="mx-auto max-w-[1800px] px-4 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className={`flex-shrink-0 `}>
                <div className={`max-md:hidden`}>
                  <HeaderLogoBlack />
                </div>
                <div className={`md:hidden`}>
                  <HeaderLogoBlack />
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>
            <HeaderMenuBlackD />
          </div>
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
};

export default HeaderWhite;
