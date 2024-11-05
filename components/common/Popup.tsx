import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (!popupShown || popupShown !== new Date().toDateString()) {
      setIsVisible(true);
    }
  }, []);

  const popupClose = () => {
    if (isChecked) {
      localStorage.setItem("popupShown", new Date().toDateString());
      setIsVisible(false);
    } else {
      setIsVisible(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const checkHandle = (e: any) => {
    e.target.checked ? setIsChecked(true) : setIsChecked(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="absolute top-10 right-10 text-[50px]">
        <MdOutlineClose
          onClick={() => popupClose()}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-white relative rounded shadow-lg text-center max-w-[1192px] w-full">
        <Image
          src="/images/popup.png"
          alt="basket"
          className="h-fulld object-cover object-center w-full  "
          width="100"
          height="100"
          unoptimized={true}
          priority={true}
        />{" "}
        <div className="absolute  text-black text-sm">
          <div className="flex items-center">
            <input
              id="filter-mobile-color-0"
              name="color"
              value="white"
              type="checkbox"
              onChange={(e) => checkHandle(e)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="filter-mobile-color-0"
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              Don`t show today
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
