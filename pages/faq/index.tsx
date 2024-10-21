import Accordion from "@src/components/common/Accordion";

import SubLayout from "@src/components/SubLayout";

const Page = () => {
  const itemList = [
    {
      title: "Frequently Asked Question 1",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Frequently Asked Question 2",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Frequently Asked Question 3",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Frequently Asked Question 4",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Frequently Asked Question 5",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Frequently Asked Question 6",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <SubLayout>
      <div className="h-full relative">
        <div id="section2" className="bg-white text-black whitespace-pre-line">
          <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
            <div className="flex max-md:flex-col ">
              <div className="w-full ">
                <div className="text-[70px] leading-[80px] max-md:text-center fontVarelmo uppercase text-black  pb-8 pl-4">
                  FAQ
                </div>
                <div className="max-w-[340px] text-xl text-[#353644] max-md:hidden pl-4">
                  Ask as anything about our company and services, and get
                  factual responces.
                </div>
                <button
                  type="button"
                  className="bg-[#222222] px-5 py-3 text-xl text-white w-[263px] mt-5 max-md:hidden ml-4"
                >
                  Got a question?
                </button>
              </div>
              <div className="w-full">
                <div className="px-4">
                  {itemList?.map((item, index) => {
                    return (
                      <Accordion
                        key={index}
                        title={item?.title}
                        content={item?.subText}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col w-full md:hidden justify-center items-center pt-20">
                <div className="max-w-[340px] text-md text-[#353644] text-center">
                  Ask as anything about our company and services, and get
                  factual responces.
                </div>
                <button
                  type="button"
                  className="bg-[#222222] px-5 py-3 text-md text-white w-[200px] mt-5"
                >
                  Got a question?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Page;
