/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            xs: "340px",
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },

        extend: {
            colors: {
                primary: "#0075FF",
                secondary: "#9BBBD0",
                third: "#25C7F6",
                accent: "#F13024",
                gold: "#f8c55e",
                lightGray: "#F0F2F5",
                blueGray100: "#F1F5F9",
                blueGray900: "#0F172A",
                buttonGreen: "#43B581",
                greyText: "#767676",
            },
            backgroundImage: {
                explosion: 'url("/bg-explosion.png")',
                circles: 'url("/bg-circles.png")',
                circleStar: 'url("/circle-star.svg")',
                desktopBg: 'url("/intro3.jpg")',
                mobileBg: 'url("/intro3mobile.jpg")',
            },
            animation: {
                "spin-slow": "spin 6s linear infinite",
            },
            fontFamily: {
                poppins: [`var(--font-poppins)`, "sans-serif"],
                sora: [`var(--font-sora)`, "sans-serif"],
                tangerine: [`var(--font-tangerine)`],
                inter: [`var(--font-inter)`],
                caviar: ["Caviar Dreams", "sans"],
            },
            fontSize: {
                "title-xxl": ["44px", "55px"],
                "title-xxl2": ["42px", "58px"],
                "title-xl": ["36px", "45px"],
                "title-xl2": ["33px", "45px"],
                "title-lg": ["28px", "35px"],
                "title-md": ["24px", "30px"],
                "title-md2": ["26px", "30px"],
                "title-sm": ["20px", "26px"],
                "title-sm2": ["22px", "28px"],
                "title-xsm": ["18px", "24px"],
                md: ["16px", "20px"],
            },
        },
    },
    container: {
        padding: {
            DEFAULT: "15px",
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
