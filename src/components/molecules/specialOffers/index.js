import { useSelector } from "react-redux";

const SpecialOffers = () => {
  const {
    investDetails: { specialOfferData, specialOfferError },
  } = useSelector((state) => state);

  return (
    <>
      {specialOfferData?.length > 0 ? (
        <div
          className={`-md:mt-3 -mt-3 flex flex-col gap-3 rounded-xl border-[0.5px] border-[#95E5A9] bg-[#F2FFF5] px-5 py-4 md:-mb-[43px] md:gap-2 lg:-mt-10 ${!specialOfferData && "hidden"}`}
        >
          {specialOfferData?.map((curOffer) => {
            return (
              <div id="_first" className="flex items-center gap-4">
                <img
                  id="_left"
                  src={
                    curOffer?.icon === "senior_citizen"
                      ? "/images/SeniorCitizenBenefitIcon.svg"
                      : "/images/WomenBenefitIcon.svg"
                  }
                  alt="SeniorCitizen"
                />
                <h4
                  id="_right"
                  className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#21B546] md:text-sm md:leading-6"
                >
                  {curOffer?.scheme_note}
                </h4>
              </div>
            );
          })}
        </div>
      ) : specialOfferError ? (
        "something went wrong"
      ) : (
        ""
      )}
    </>
  );
};

export default SpecialOffers;
