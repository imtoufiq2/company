import Image from "../../atoms/Image";

const PaymentSuccess = () => {
  return (
    <div className="mx-auto flex h-fit max-w-[592px] flex-col items-center  gap-5  p-2 md:w-[592px]  md:p-8">
      <Image
        src="/images/success-green.svg"
        alt="success"
        className="h-[6.25rem] w-[6.25rem]"
      />
      <h5 className="bold-text  text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
        Payment Successful
      </h5>
      <p className="regular-text  text-base leading-7 tracking-[-0.3] text-[#5E718D]">
        Redirecting you to the confirmation page...
      </p>
    </div>
  );
};

export default PaymentSuccess;
