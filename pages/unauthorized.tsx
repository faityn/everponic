import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Unauthorized = () => {
  return (
    <div className="bg-primary h-full flex relative items-center justify-center">
      <div className="text-4xl">Unauthorized</div>
    </div>
  );
};

export default Unauthorized;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
