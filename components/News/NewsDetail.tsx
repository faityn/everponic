import { useRecoilState } from "recoil";
import { newsDetailAtom } from "../atom";
import { useRouter } from "next/router";
import { getNewsDetail } from "@src/hooks/useData";
import { useEffect } from "react";

import { format } from "date-fns";

const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [itemsDetail, setItemsDetail] = useRecoilState(newsDetailAtom);

  const getData = async () => {
    const response = await getNewsDetail(Number(id));

    if (response?.status) {
      setItemsDetail([response?.result?.responseObject]);
    }
  };
  useEffect(() => {
    if (id !== undefined) {
      //eslint-disable-next-line react-hooks/exhaustive-deps
      getData();
    }
  }, [id]);

  return (
    <div className="h-full relative">
      <div id="section2" className="bg-white text-black whitespace-pre-line">
        <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
          <div className="mt-20 grid grid-cols-10 ">
            <div className=" col-span-4 max-md:col-span-12">
              <div className="text-[70px] leading-[80px] max-md:text-center fontVarelmo uppercase text-black  pb-8 pl-4">
                NEWS
              </div>
            </div>
            <div className="col-span-6 max-md:col-span-12 w-full">
              <div>
                {itemsDetail[0]?.boardFile?.length > 0 && (
                  <div className="mb-3 w-full">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${itemsDetail[0]?.boardFile[0]?.file_name}`}
                      alt={itemsDetail[0]?.title as string}
                      className=" object-cover object-center w-full  "
                    />
                  </div>
                )}
              </div>
              <div>
                {itemsDetail[0]?.createdAt &&
                  format(itemsDetail[0]?.createdAt as string, "MMM dd, yyyy")}
              </div>

              <div className="mt-5 text-[32px] font-medium text-[#353644]">
                {itemsDetail[0]?.title}
              </div>

              <div className="mt-5 text-xl text-greyText ">
                <div
                  dangerouslySetInnerHTML={{
                    __html: itemsDetail[0]?.content as string,
                  }}
                  className="fontPretendard"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
