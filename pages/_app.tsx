import "@src/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
//import Transition from "../components/Transition";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { RecoilRoot } from "recoil";
function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <RecoilRoot>
            <Layout>
                <AnimatePresence>
                    <motion.div key={router.route} className="h-full">
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </RecoilRoot>
    );
}

export default appWithTranslation(App);
