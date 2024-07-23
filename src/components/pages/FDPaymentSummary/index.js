import { useEffect, useState } from "react";

import MaturityAction from "../../organism/maturityAction";
import PaymentSuccess from "../../molecules/paymentSuccess";
import PreviewMaturityAction from "../../organism/previewMaturityAction";

const FDPaymentSummary = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const hanldeClickNext = () => {
    if (!(currentComponent >= 2)) {
      setCurrentComponent(currentComponent + 1);
    }
  };
  const hanldeClickPrevious = () => {
    if (!(currentComponent <= 0)) {
      setCurrentComponent(currentComponent - 1);
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <div id="space" className="hidden h-3 md:block"></div>

      {/* {currentComponent === 0 && (
        <PreviewMaturityAction hanldeClickNext={hanldeClickNext} />
      )}
      {currentComponent === 1 && (
        <PaymentSuccess hanldeClickNext={hanldeClickNext} />
      )}
      {currentComponent === 2 && <MaturityAction />} */}
      <div id="space" className="h-3"></div>
    </>
  );
};

export default FDPaymentSummary;
