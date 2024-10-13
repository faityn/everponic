const Loader = () => {
  return (
    <div
      className={`relative z-50 `}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-white bg-opacity-70 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto ">
        <div
          className={`flex min-h-full  justify-center p-4 text-center items-center sm:p-0  `}
        >
          <div
            className={`relative transform overflow-hidden rounded-xl border bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md `}
          >
            <div className="bg-white px-3 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div className="text-blueGray900 absolute right-7 top-5">
                <span className="font-bold text-xl cursor-pointer text-black">
                  hjkjh
                </span>
              </div>

              <h4 className="text-gray-900 pt-4 text-3xl text-center font-bold">
                hjk
              </h4>
              <div className="mt-6">jj</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
