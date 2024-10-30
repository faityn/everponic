import { useRecoilState } from "recoil";
import { careersListAtom } from "../atom";

import { getCreersList } from "@src/hooks/useData";
import { useEffect } from "react";

import OneItem from "./OneItem";
import { useTranslation } from "next-i18next";

const RecruitList = () => {
  const { t } = useTranslation("common");
  const [itemsList, setItemsList] = useRecoilState(careersListAtom);

  const getData = async () => {
    const response = await getCreersList();

    if (response?.status) {
      setItemsList(response?.result?.responseObject?.data);
    }
  };
  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);

  return (
    <div className="h-full relative notranslate">
      <div id="section2" className="bg-white text-black whitespace-pre-line">
        <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
          <div className="mt-20 max-md:mt-14 flex flex-col ">
            <div className="w-full ">
              <div className="text-[70px] leading-[80px] max-md:text-[30px] max-md:leading-[40px] max-md:text-center fontVarelmo uppercase text-black  pb-8 ">
                Careers
              </div>
              <div className="max-w-[340px] text-xl max-md:text-md text-[#353644] max-md:text-center max-md:mx-auto ">
                {t("careers_text_1")}
              </div>
            </div>
            <div className="w-full mt-16">
              <div className="grid grid-cols-10 gap-3">
                {itemsList?.map((item, index) => {
                  return (
                    <OneItem
                      key={index}
                      title={String(item?.title)}
                      outlink={String(item?.outlink)}
                      img={
                        Number(item?.careersFile?.length) > 0
                          ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${item?.careersFile[0]?.file_name}`
                          : ""
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitList;
