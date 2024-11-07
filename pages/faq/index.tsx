import FaqList from "@src/components/Faq/FaqList";

import SubLayout from "@src/components/SubLayout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page = () => {
  return (
    <SubLayout>
      <FaqList />
    </SubLayout>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale === "kr" ? "kr" : "en", [
      "common",
    ])),
  },
});
