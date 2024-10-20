import { useEffect, useState } from "react";
import Cookies from "js-cookie";
const GoogleTranslate = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        const addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.googleTranslateElementInit = googleTranslateElementInit;

        if (Cookies.get("googtrans")) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setSelected(Cookies.get("googtrans"));
        } else {
            setSelected("/auto/en");
        }
    }, []);

    const googleTranslateElementInit = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "auto",
                autoDisplay: false,
                includedLanguages: "en,ko",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                layout: window.google.translate.TranslateElement.InlineLayout
                    .SIMPLE,
            },
            "google_translate_element"
        );
    };

    const langChange = (e: string) => {
        Cookies.remove("googtrans", { path: "/", domain: ".everponic.com" });
        Cookies.set("googtrans", e);
        setSelected(e);
        window.location.reload();
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
            <div className="uppercase   notranslate ">
                {selected === "/auto/en" ? (
                    <div className="flex flex-col gap-4 px-4 w-[150px] py-3">
                        <div className="text-black">English</div>
                        <div
                            onClick={() => langChange("/auto/ko")}
                            className="text-[#979797] hover:text-primary cursor-pointer"
                        >
                            Korean
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 px-4 w-[150px] py-3">
                        <div
                            onClick={() => langChange("/auto/en")}
                            className="text-[#979797] hover:text-primary cursor-pointer"
                        >
                            English
                        </div>

                        <div className="text-black">Korean</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default GoogleTranslate;
