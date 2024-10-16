import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
