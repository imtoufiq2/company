// import { useEffect } from "react";
// import Image from "../../atoms/Image";
// import Lottie from "lottie-react";
// import GreenTickss from "../../../successLottie.json"
// const PaymentSuccess = ({hanldeClickNext}) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       hanldeClickNext();
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [hanldeClickNext]);
//   return (
//     <div className="mx-auto flex h-fit max-w-[592px] flex-col items-center  gap-5  py-2 md:w-[592px]  md:py-8">
//       {/* <Image
//         src="/images/success-green.svg"
//         alt="success"
//         className="h-[6.25rem] w-[6.25rem]"
//       /> */}
//       <Lottie animationData={GreenTickss} />
//       <h5 className="bold-text  text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
//         Payment Successful
//       </h5>
//       <p className="regular-text  text-base leading-7 tracking-[-0.3] text-[#5E718D]">
//         Redirecting you to the confirmation page...
//       </p>
//     </div>
//   );
// };

// export default PaymentSuccess;
import { useEffect } from "react";
import Image from "../../atoms/Image";
import Lottie from "lottie-react";
import GreenTickss from "../../../successLottie.json";

const PaymentSuccess = ({ handleNextClick }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 2000);

    // Disable pointer events on body
    document.body.style.pointerEvents = 'none';

    return () => {
      clearTimeout(timer);
      // Re-enable pointer events on body when component unmounts
      document.body.style.pointerEvents = 'auto';
    };
  }, [handleNextClick]);

  return (
    <div className="mx-auto flex h-fit max-w-[592px] flex-col items-center gap-5 py-2 md:w-[592px] md:py-8">
      <Lottie animationData={GreenTickss} />
      <h5 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
        Payment Successful
      </h5>
      <p className="regular-text text-base leading-7 tracking-[-0.3] text-[#5E718D]">
        Redirecting you to the confirmation page...
      </p>
    </div>
  );
};

export default PaymentSuccess;
