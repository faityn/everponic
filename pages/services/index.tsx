import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Services = () => {
  return (
    <div
      id="mainLayout"
      className="bg-white max-w-[1140px] mx-auto w-full h-auto  "
    >
      <div
        id="mainLayoutSub"
        className=" pt-6 grid grid-cols-12 gap-5 text-black"
      >
        <div className="col-span-12 w-full max-md:col-span-12 max-md:px-5">
          <div className="w-full mb-10">
            <img src="/service/1.png" className="w-full" />
            <img src="/service/2.png" className="w-full" />
            <img src="/service/3.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
