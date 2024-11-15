import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { dropLangAtom } from "./atom";
import { useSetRecoilState } from "recoil";
const GoogleTranslate = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [, setSelected] = useState<string | null>(null);
  const setLangDrop = useSetRecoilState(dropLangAtom);

  useEffect(() => {
    // const addScript = document.createElement("script");
    // addScript.setAttribute(
    //   "src",
    //   "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    // );
    // document.body.appendChild(addScript);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    // window.googleTranslateElementInit = googleTranslateElementInit;

    if (Cookies.get("active-lang")) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setSelected(Cookies.get("active-lang"));
    } else {
      setSelected("en");
    }
  }, []);

  // const googleTranslateElementInit = () => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "auto",
  //       autoDisplay: false,
  //       includedLanguages: "en,ko",
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //     },
  //     "google_translate_element"
  //   );
  // };

  const langChange = (e: string) => {
    const ll = `${e === "en" ? "/auto/en" : "/auto/ko"}`;

    router.replace({ pathname, query }, asPath, { locale: e });
    Cookies.set("active-lang", e);
    Cookies.remove("googtrans", { path: "/", domain: ".everponic.com" });
    Cookies.set("googtrans", ll);
    setSelected(ll);
    setLangDrop(false);
    //window.location.reload();
  };

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          width: "0px",
          height: "0px",
          position: "absolute",
          left: "50%",
          zIndex: -99999,
        }}
      ></div>
      <div className="uppercase notranslate ">
        {locale === "kr" ? (
          <div className="flex flex-col gap-4 px-4 w-[150px] py-3">
            <div
              onClick={() => langChange("en")}
              className="text-[#979797] hover:text-primary cursor-pointer"
            >
              English
            </div>

            <div className="text-black">Korean</div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 px-4 w-[150px] py-3">
            <div className="text-black">English</div>
            <div
              onClick={() => langChange("kr")}
              className="text-[#979797] hover:text-primary cursor-pointer"
            >
              Korean
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GoogleTranslate;
