import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import PageBanner2 from "@src/components/Banner/PageBanner2";
import Carousel from "react-multi-carousel";
import Partners1Item from "@src/components/Partners/Partners1Item";
import Layout from "@src/components/Layout";

const Page = () => {
  const BannerInfo = {
    title: "MODULAR CONTAINER\nPLANT FACTORY",
    text:
      "Is designed to enable the production  of always\nFRESH plants accessible to",
    white_text: "“anyone, anytime, anywhere”.",

    img: "/images/b5.png",
  };

  const section5itemList = [
    {
      title: "Green Butter",
      image: "/images/pa1.png",
    },
    {
      title: "Red Butter",
      image: "/images/pa1.png",
    },
    {
      title: "Red Oakleaf",
      image: "/images/pa1.png",
    },
    {
      title: "Green Oakleaf",
      image: "/images/pa1.png",
    },
    {
      title: "Green Frilly",
      image: "/images/pa1.png",
    },
    {
      title: "Red Coral",
      image: "/images/pa1.png",
    },
    {
      title: "Bulls Blood",
      image: "/images/pa1.png",
    },
    {
      title: "Bulls Blood",
      image: "/images/pa1.png",
    },
    {
      title: "Bulls Blood",
      image: "/images/pa1.png",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    largeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1644 },
      items: 7,
    },
    desktop2: {
      breakpoint: { max: 1644, min: 1310 },
      items: 5,
    },
    desktop3: {
      breakpoint: { max: 1310, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1080, min: 820 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 820, min: 520 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };
  return (
    <Layout>
      <div className="h-full relative">
        <PageBanner2 info={BannerInfo} />
        <div id="section2" className="bg-white text-black whitespace-pre-line">
          <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
            <div className="text-[48px] fontVarelmo uppercase text-black text-center pb-8">
              PARTNERS
            </div>

            <div className="max-w-[939px] mx-auto text-center fontPretendard  text-3xl text-[#767676]">
              Partners are future-oriented collaborators who provide business
              idea, manpower, finance, products and services that complement our
              solutions and capabilities. Please join us in expanding modular
              vertical plant factory globally through close collaboration with
              us.
            </div>

            <div className="relative mt-20">
              <Carousel
                responsive={responsive}
                swipeable
                draggable
                centerMode={false}
                //autoPlaySpeed={3000}
                infinite
                pauseOnHover
                dotListClass=""
                showDots={false}
                renderDotsOutside={false}
                slidesToSlide={1}
                className=" pb-8 hover:animate-none"
                arrows={false}
              >
                {section5itemList &&
                  section5itemList.map((item, index) => (
                    <div key={index} className={`animate-line2 `}>
                      <Partners1Item title={item?.title} img={item?.image} />
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>

          <div className="pb-20">
            <Image
              src="/images/pa2.png"
              alt="basket"
              className="min-h-[500px] object-cover object-center w-full "
              width="130"
              height="50"
              unoptimized={true}
              priority={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
