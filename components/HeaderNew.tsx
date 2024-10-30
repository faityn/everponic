import HeaderLogo from "./common/HeaderLogo";
import HeaderMenu from "./common/HeaderMenu";
import HeaderMobileLogo from "./common/HeaderMobileLogo";
import MobileMenu from "./common/MobileMenu";

type props = {
  type?: string;
  color?: string;
};
const HeaderNew = ({ type }: props) => {
  return (
    <div className=" absolute z-30 w-full flex items-center fontPretendard h-[70px notranslate">
      <nav className=" bg-transparent w-full">
        <div className="mx-auto max-w-[1800px] px-4  sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className={`flex-shrink-0 `}>
                <div className={`max-md:hidden`}>
                  <HeaderLogo type={type} color="white" />
                </div>
                <div className={`md:hidden`}>
                  <HeaderMobileLogo color="white" />
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>
            <HeaderMenu color="white" />
          </div>
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
};

export default HeaderNew;
