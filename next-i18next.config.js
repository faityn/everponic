module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "kr"],
    localePath:
      typeof window === "undefined"
        ? require("path").resolve("./public/locales")
        : "/public/locales",
  },
};
