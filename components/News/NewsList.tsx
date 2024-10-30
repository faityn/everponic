import PageBanner2 from "../Banner/PageBanner2";
import { useRecoilState } from "recoil";
import { galleryListAtom, newsListAtom } from "../atom";
import { useRouter } from "next/router";
import { getGalleryList, getNewsList } from "@src/hooks/useData";
import { useEffect } from "react";
import { format } from "date-fns";
import OneItem from "./OneItem";
import SectionTwoItem from "./SectionTwoItem";

const NewsList = () => {
  const router = useRouter();
  const { page } = router.query;
  const currPage = page !== undefined ? page : 1;
  const size = 20;
  const [itemsList, setItemsList] = useRecoilState(newsListAtom);
  const [galleryList, setGalleryList] = useRecoilState(galleryListAtom);

  const BannerInfo = {
    title: "MODULAR CONTAINER\nPLANT FACTORY",
    text:
      "Is designed to enable the production  of always\nFRESH plants accessible to",
    white_text: "“anyone, anytime, anywhere”.",

    img: "/images/b5.png",
  };

  const getData = async () => {
    const response = await getNewsList(Number(currPage), Number(size));

    if (response?.status) {
      setItemsList(response?.result?.responseObject?.data);
    }
    const resGallery = await getGalleryList(Number(currPage), Number(size));
    if (resGallery?.status) {
      setGalleryList(resGallery?.result?.responseObject?.data);
    }
  };
  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);

  return (
    <div className="h-full relative">
      <PageBanner2 info={BannerInfo} />
      <div id="section1" className="bg-white text-black whitespace-pre-line">
        <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
          <div className="text-[48px] fontVarelmo uppercase text-black text-center pb-8">
            NEWS
          </div>
          <div className=" grid grid-cols-12 gap-5">
            {itemsList?.map((item, index) => {
              return (
                <OneItem
                  key={index}
                  id={item?.id}
                  title={item?.title}
                  subText={`${format(
                    item?.createdAt as string,
                    "MMM dd, yyyy"
                  )}`}
                  img={
                    Number(item?.boardFile?.length) > 0
                      ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${item?.boardFile[0]?.file_name}`
                      : ""
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      <div id="section2" className="bg-black text-black whitespace-pre-line">
        <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
          <div className="text-[48px] fontVarelmo uppercase text-white text-center pb-8">
            Gallery
          </div>
          <div className=" grid grid-cols-12 gap-5">
            {galleryList?.map((item, index) => {
              return (
                <SectionTwoItem
                  key={index}
                  id={item?.id}
                  title={item?.title}
                  subText={`${format(
                    item?.createdAt as string,
                    "MMM dd, yyyy"
                  )}`}
                  img={
                    Number(item?.galleryFile?.length) > 0
                      ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${item?.galleryFile[0]?.file_name}`
                      : ""
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
