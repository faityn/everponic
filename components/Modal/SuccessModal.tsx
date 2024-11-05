import React from "react";

type ModalProps = {
  children: React.ReactNode;
};

const SuccessModal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm">
      <div className="flex w-[360px] flex-col ">
        <div className="bg-white rounded-3xl text-center drop-shadow-1 border">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
