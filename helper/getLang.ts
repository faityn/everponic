import Cookies from "js-cookie";

const getLang = () => {
  const lang = Cookies.get("active-lang");
  if (lang === "kr") {
    return "kr";
  } else {
    return "en";
  }
};

export default getLang;
