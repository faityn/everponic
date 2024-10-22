import GoogleTranslate from "../GoogleTranslate";
import { useRecoilState } from "recoil";
import { dropLangAtom, mobileMenuAtom } from "../atom";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

type props = {
  color?: string;
  type?: string;
};
const HeaderMenu = ({ color, type }: props) => {
  const [langDrop, setLangDrop] = useRecoilState(dropLangAtom);
  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuAtom);
  const handleLang = () => {
    langDrop ? setLangDrop(false) : setLangDrop(true);
  };
  const handleMobileMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center md:ml-6">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12 max-xl:space-x-6">
              <Link
                href="/"
                className={` px-3 py-2 text-md font-medium ${
                  color === "white" ? "text-white" : "text-black"
                }  border-b-2 border-transparent hover:border-b-2 hover:border-primary hover:text-primary`}
                aria-current="page"
              >
                Home
              </Link>

              <div
                className={`dropdown inline-block relative px-3 py-2 text-md border-b-2 border-transparent font-medium ${
                  color === "white" ? "text-white" : "text-black"
                }  hover:border-b-2 hover:border-primary hover:text-primary`}
              >
                <div className="">Solutions</div>
                <div className="dropdown-content absolute hidden border bg-white rounded-[26px] ml-[-50px] w-[170px]  mt-3 py-4 px-2">
                  <ul className="  rounded-3xl ">
                    <li className="mb-2">
                      <Link
                        className=" bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="/plant_factory"
                      >
                        EP Plant Factory
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="/produce"
                      >
                        EP Produce
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="/distribution"
                      >
                        EP Distribution
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`dropdown inline-block relative px-3 py-2 text-md font-medium ${
                  color === "white" ? "text-white" : "text-black"
                }  hover:border-b-2 border-primary hover:text-primary`}
              >
                <div className="">About Us</div>
                <div className="dropdown-content absolute border hidden bg-white rounded-[26px] ml-[-50px] w-[170px]  mt-3 py-4 px-2">
                  <ul className="  rounded-3xl ">
                    <li className="mb-2">
                      <Link
                        className=" bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="/who_we_are"
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        className="bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="/mission_vision"
                      >
                        Mission & Vision
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        className="bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="/partners"
                      >
                        Partners
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`dropdown inline-block relative px-3 py-2 text-md font-medium ${
                  color === "white" ? "text-white" : "text-black"
                }  hover:border-b-2 border-primary hover:text-primary`}
              >
                <div className="">Media</div>
                <div className="dropdown-content absolute border hidden bg-white rounded-[26px] ml-[-60px] w-[170px]  mt-3 py-4 px-2">
                  <ul className="  rounded-3xl ">
                    <li className="mb-2">
                      <Link
                        className=" bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="/news"
                      >
                        News & Gallery
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        className="bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="/faq"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`dropdown inline-block relative px-3 py-2 text-md font-medium ${
                  color === "white" ? "text-white" : "text-black"
                }  hover:border-b-2 border-primary hover:text-primary`}
              >
                <div className="">Contact</div>
                <div className="dropdown-content absolute hidden border bg-white rounded-[26px] ml-[-60px] w-[170px]  mt-3 py-4 px-2">
                  <ul className="  rounded-3xl ">
                    <li className="mb-2">
                      <Link
                        className=" bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        className="bg-white text-greyText hover:text-primary py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Recruit
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative ml-12 max-xl:ml-8">
            <div>
              <button
                type="button"
                className="relative flex max-w-xs items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="lang-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => handleLang()}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                {color === "white" ? (
                  <img
                    className="h-7 w-7 rounded-full"
                    src="/lang.svg"
                    alt=""
                  />
                ) : (
                  <img
                    className="h-7 w-7 rounded-full"
                    src="/lang_black.svg"
                    alt=""
                  />
                )}
              </button>
            </div>

            <div
              className={`${
                langDrop ? "" : "hidden"
              } absolute right-0 z-10 mt-2  px-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="lang-button"
            >
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </div>
      <div className="-mr-2 flex gap-7 items-center md:hidden">
        <div>
          <button
            type="button"
            className="relative flex max-w-xs items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="lang-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => handleLang()}
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            {color === "white" ? (
              <img className="h-7 w-7 rounded-full" src="/lang.svg" alt="" />
            ) : (
              <img
                className="h-7 w-7 rounded-full"
                src="/lang_black.svg"
                alt=""
              />
            )}
          </button>
          <div
            className={`${
              langDrop ? "" : "hidden"
            } absolute right-0 z-10 mt-2  px-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="lang-button"
          >
            <GoogleTranslate />
          </div>
        </div>
        <button
          type="button"
          className={`relative inline-flex items-center justify-center rounded-md ${
            color === "white" ? "text-white" : "text-black"
          }  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => handleMobileMenu()}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {type === "mobile" ? (
            <IoCloseSharp className="text-[32px]" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>
    </>
  );
};

export default HeaderMenu;
