import SubLayout from "@src/components/SubLayout";

const Page = () => {
  return (
    <SubLayout>
      <div className="h-full relative">
        <div id="section1" className="bg-white text-black whitespace-pre-line">
          <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
            <div className="flex max-md:flex-col ">
              <div className="w-full ">
                <div className="text-[70px] leading-[80px] max-md:text-[24px] max-md:leading-[30px] max-md:text-center md:max-w-[495px] fontVarelmo uppercase text-black  pb-8 max-md:pb-3 pl-4 max-lg:text-[34px] max-lg:leading-[40px]">
                  Ask us anything
                </div>
                <div className="max-w-[340px] max-md:mx-auto text-xl max-md:text-md max-md:mb-5 text-[#353644] max-md:text-center pl-4">
                  Ask as anything about our company and services, and get
                  factual responces.
                </div>
              </div>
              <div className="w-full px-4">
                <form>
                  <div className="max-w-[736px]">
                    <div className="mb-5">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full border border-slate-400 py-4 px-5 text-md font-normal  placeholder:font-light placeholder:text-md"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-slate-400 py-4 px-5 text-md font-normal placeholder:font-light placeholder:text-md"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="text"
                        placeholder="Title"
                        className="w-full border border-slate-400 py-4 px-5 text-md font-normal placeholder:font-light placeholder:text-md"
                      />
                    </div>

                    <div className="mb-5">
                      <textarea
                        className="w-full border border-slate-400 h-[200px] py-4 px-5 text-md font-normal placeholder:font-light placeholder:text-md"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="flex mb-5">
                      <button
                        type="button"
                        className="bg-white border max-sm:text-sm max-sm:w-[120px] max-sm:h-[45px] text-[#222222] border-slate-500 w-[180px] h-[60px] text-xl font-medium"
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        className="bg-[#222222] max-sm:text-sm max-sm:w-[120px] max-sm:h-[45px] text-white w-[180px] h-[60px] text-xl font-medium ml-3"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubLayout>
  );
};

export default Page;
