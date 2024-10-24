import { sendQuestion } from "@src/hooks/useData";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SuccessModal from "../Modal/SuccessModal";
import Link from "next/link";

interface FormData {
  title: string;
  name?: string;
  email?: string;
  message?: string;
}
const QuestionForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const sendData = {
      title: data.title,
      name: data.name,
      email: data.email,
      message: data.message,
    };
    const res = await sendQuestion(sendData);
    if (res?.status) {
      setIsOpen(true);
    } else {
      //setCreateError(true);
    }
  };

  return (
    <div className="h-full relative pt-16">
      <div id="section1" className="bg-white text-black whitespace-pre-line">
        <div className=" max-w-[1800px] mx-auto w-full pt-24 pb-24">
          <div className="flex max-md:flex-col ">
            <div className="w-full ">
              <div className="text-[70px] leading-[80px] max-md:text-[24px] max-md:leading-[30px] max-md:text-center md:max-w-[495px] fontVarelmo uppercase text-black  pb-8 max-md:pb-3 pl-4 max-lg:text-[34px] max-lg:leading-[40px]">
                Ask us anything
              </div>
              <div className="max-w-[340px] max-md:mx-auto text-xl max-md:text-md max-md:mb-5 text-[#353644] max-md:text-center pl-4">
                Ask as anything about our company and services, and get factual
                responces.
              </div>
            </div>
            <div className="w-full px-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-[736px]">
                  <div className="mb-5">
                    <input
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                      placeholder="Name"
                      className="w-full border border-slate-400 py-4 px-5 text-md font-normal  placeholder:font-light placeholder:text-md"
                    />
                    {errors.name && (
                      <span className="font-medium text-red-500 ">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="mb-5">
                    <input
                      type="email"
                      {...register("email", {
                        required: true,
                      })}
                      placeholder="Email"
                      className="w-full border border-slate-400 py-4 px-5 text-md font-normal placeholder:font-light placeholder:text-md"
                    />
                    {errors.email && (
                      <span className="font-medium text-red-500 ">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="mb-5">
                    <input
                      type="text"
                      {...register("title", {
                        required: true,
                      })}
                      placeholder="Title"
                      className="w-full border border-slate-400 py-4 px-5 text-md font-normal placeholder:font-light placeholder:text-md"
                    />
                    {errors.title && (
                      <span className="font-medium text-red-500 ">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mb-5">
                    <textarea
                      {...register("message", {
                        required: true,
                      })}
                      className="w-full border border-slate-400 h-[200px] py-4 px-5 text-md font-normal placeholder:font-light placeholder:text-md"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="font-medium text-red-500 ">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="flex mb-5">
                    <button
                      type="button"
                      className="bg-white border max-sm:text-sm max-sm:w-[120px] max-sm:h-[45px] text-[#222222] border-slate-500 w-[180px] h-[60px] text-xl font-medium"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
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
        {isOpen ? (
          <SuccessModal>
            <div className="pb-8">
              <div className="max-w-[200px] h-1 mx-auto bg-three-color-gradient-3"></div>
              <div className="text-2xl px-12 font-medium h-[120px] flex items-center justify-center text-green-600">
                Successfully
              </div>
              <div className="flex w-full items-center justify-center gap-4  ">
                <Link
                  className="rounded-3xl flex w-[100px] items-center justify-center text-[18px] text-center font-semibold bg-black  px-3 h-[40px] text-white "
                  href={`/faq`}
                >
                  Okay
                </Link>
              </div>
            </div>
          </SuccessModal>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default QuestionForm;
