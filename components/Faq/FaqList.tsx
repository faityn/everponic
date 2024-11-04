import { useRecoilState } from "recoil";
import { faqListAtom } from "../atom";
import { useRouter } from "next/router";
import { getFaqList } from "@src/hooks/useData";
import { useEffect } from "react";

import Link from "next/link";
import Accordion from "../common/Accordion";

const FaqList = () => {
  const router = useRouter();
  const { page } = router.query;
  const currPage = page !== undefined ? page : 1;
  const size = 20;
  const [itemsList, setItemsList] = useRecoilState(faqListAtom);

  const getData = async () => {
    const response = await getFaqList(Number(currPage), Number(size));

    if (response?.status) {
      setItemsList(response?.result?.responseObject);
    }
  };
  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);

  return (
    <div className="h-full relative">
      <div id="section2" className="bg-white text-black whitespace-pre-line">
        <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
          <div className="mt-20 flex max-md:flex-col ">
            <div className="w-full ">
              <div className="text-[70px] leading-[80px] max-md:text-center fontVarelmo uppercase text-black  pb-8 pl-4">
                FAQ
              </div>
              <div className="max-w-[340px] text-xl text-[#353644] max-md:hidden pl-4">
                Ask as anything about our company and services, and get factual
                responces.
              </div>
              <div className="mt-10 max-md:hidden w-[263px] ">
                <Link
                  href="/question"
                  className="bg-[#222222] px-12 py-3 text-xl text-white w-[263px] ml-4"
                >
                  Got a question?
                </Link>
              </div>
            </div>
            <div className="w-full">
              <div className="px-4">
                {itemsList?.map((item, index) => {
                  return (
                    <Accordion
                      key={index}
                      title={String(item?.title)}
                      content={String(item?.answer)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col w-full md:hidden justify-center items-center pt-20">
              <div className="max-w-[340px] text-md text-[#353644] text-center">
                Ask as anything about our company and services, and get factual
                responces.
              </div>
              <div className="mt-10 max-md:hidden w-[263px] ">
                <Link
                  href="/question"
                  className="bg-[#222222] px-12 py-3 text-xl text-white w-[263px] ml-4"
                >
                  Got a question?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqList;
