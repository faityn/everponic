import GoogleTranslate from "./GoogleTranslate";
import HeaderLogo from "./common/HeaderLogo";
import { useRecoilState } from "recoil";
import { dropLangAtom, mobileMenuAtom } from "./atom";

const HeaderNew = () => {
    const [langDrop, setLangDrop] = useRecoilState(dropLangAtom);
    const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuAtom);
    const handleLang = () => {
        langDrop ? setLangDrop(false) : setLangDrop(true);
    };
    const handleMobileMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };
    return (
        <div className=" absolute z-30 w-full flex items-center fontPretendard h-[70px ">
            <nav className=" bg-transparent w-full">
                <div className="mx-auto max-w-[1490px] px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <HeaderLogo />
                            </div>
                            <div className="hidden md:block"></div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-7 ">
                                        <a
                                            href="#"
                                            className="rounded-md  px-3 py-2 text-md font-medium text-white hover:bg-gray-700"
                                            aria-current="page"
                                        >
                                            Home
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-700 hover:text-white"
                                        >
                                            Solutions
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-700 hover:text-white"
                                        >
                                            About Us
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-700 hover:text-white"
                                        >
                                            Media
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-700 hover:text-white"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>

                                <div className="relative ml-8">
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
                                            <span className="sr-only">
                                                Open user menu
                                            </span>

                                            <img
                                                className="h-7 w-7 rounded-full"
                                                src="/lang.svg"
                                                alt=""
                                            />
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
                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => handleMobileMenu()}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>

                                <svg
                                    className="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`${mobileMenu ? "" : "hidden"}`}
                    id="mobile-menu"
                >
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-black">
                        <a
                            href="#"
                            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Solutions
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Media
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderNew;
