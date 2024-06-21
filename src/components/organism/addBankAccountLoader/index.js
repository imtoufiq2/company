import Modal from "../modal";

const AddBankAccountLoader = () => {
  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[22.5rem] flex-col rounded-lg  border-0 bg-[#FCEBC7] p-5 shadow-lg outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <div id="_header_part">
          <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
            Verifying Your Bank Account Details
          </h3>
        </div>
        <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
          Please wait while we verify your bank account details. This will take
          a short moment...
          {/* <span className="">UPI app and then come here...</span> */}
        </p>
        <img
          src="/images/bank-fetch-loader.gif"
          alt="loader"
          className="-mt-2 md:mt-0"
        />
      </div>
    </div>
  );
  return (
    <div>
      <Modal body={firstModalData} isTable />
    </div>
  );
};

export default AddBankAccountLoader;
