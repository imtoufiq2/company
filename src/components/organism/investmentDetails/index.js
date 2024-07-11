import React, { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchWithWait } from "../../../utils/method";
import { formatNumberIndian } from "../../../utils/commonUtils";
import { fetchInvestmentDetails } from "../../../redux/actions/portfolio";

import Heading from "../../atoms/headingContent/Heading";
import PortfolioInfoText from "../../atoms/PortfolioInfoText";
import EarnedTodayMessage from "../../atoms/earnedTodayMessage";
import Button from "../../atoms/button/Button";
import Loader from "../loader";

const InvestmentDetails = () => {
  const dispatch = useDispatch();
  const {
    portfolioPage: { investmentDetailError, investmentDetailData },
    ApplicationLoader: { loading },
  } = useSelector((state) => state);

  const sessionStorageData = JSON.parse(
    sessionStorage.getItem("portfolioFixedDeposit"),
  );
  const { id } = useParams();

  const getonefdportfolio = useCallback(() => {
    const data = { fd_investment_id: +id };
    fetchWithWait({ dispatch, action: fetchInvestmentDetails(data) });
  }, [dispatch, id]);

  useEffect(() => {
    getonefdportfolio();
  }, [getonefdportfolio]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-auto mb-8 mt-8 flex w-full max-w-[1008px] flex-col gap-5 px-5 sm:max-w-[592px]  sm:px-0 md:gap-7 md:px-0">
          <div id="_header">
            <h3 className="bold-text text-xl leading-8 tracking-[-0.3px]">
              FD Details
            </h3>
            <p className="regular-text text-sm leading-6 tracking-[-0.2px] text-[#5E718D]">
              Check the details of your investment
            </p>
          </div>

          {investmentDetailError ? (
            "something went wronog"
          ) : (
            <>
              <div
                id="_second_one_box"
                className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white py-5"
              >
                <div id="_top" className="flex flex-col gap-5 px-5">
                  <div id="_first" className="flex items-center gap-3">
                    <img
                      src={sessionStorageData?.logo_url}
                      alt="bankLogo"
                      className="h-10 w-10 object-contain"
                    />
                    <div id="_logo_right">
                      <h3 className="bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B]">
                        {sessionStorageData?.fd_name}
                      </h3>
                      <p className="regular-text text-[12px] leading-5 tracking-[-0.2px] text-[#5E718D]">
                        Application No.:{" "}
                        {investmentDetailData?.[0]?.application_number
                          ? investmentDetailData?.[0]?.application_number
                          : "-"}
                      </p>
                    </div>
                  </div>
                  <div
                    id="_second"
                    className="flex items-center justify-between"
                  >
                    <div id="_second_left">
                      <PortfolioInfoText
                        text="Total Investment"
                        className=" text-[12px] leading-5 text-slate-500"
                      />

                      <Heading
                        text={`₹ ${investmentDetailData?.[0]?.investment_amount && formatNumberIndian(investmentDetailData?.[0]?.investment_amount)}`}
                        type="h3"
                        className="semi-bold-text text-base  leading-7 text-[#1B1B1B]"
                      />
                    </div>
                    <div id="_second_right">
                      <PortfolioInfoText
                        text="Interest Rate"
                        className=" text-[12px] leading-5 text-slate-500"
                      />

                      <h3 className="semi-bold-text text-end  text-base leading-7 tracking-[-0.3px] text-[#21B546]">
                        {investmentDetailData?.[0]?.rate_of_interest}
                        <span className="text-[12px] leading-5 tracking-[-0.2px]">
                          p.a.
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div
                    id="_third"
                    className="flex items-center justify-between"
                  >
                    <div id="_third_left">
                      <PortfolioInfoText
                        text="Tenure"
                        className=" text-[12px] leading-5 text-slate-500"
                      />
                      <Heading
                        text={`${investmentDetailData?.[0]?.tenure} yrs`}
                        type="h3"
                        className="semi-bold-text text-base  leading-7 text-[#1B1B1B]"
                      />
                    </div>
                    <div id="_third_right">
                      <PortfolioInfoText
                        text="Interest Till Date"
                        className=" text-[12px] leading-5 text-slate-500"
                      />

                      <Heading
                        text={investmentDetailData?.[0]?.interest_till_date}
                        type="h3"
                        className="semi-bold-text text-end  text-base leading-7 text-[#21B546]"
                      />
                    </div>
                  </div>
                </div>
                <EarnedTodayMessage
                  className="rounded-b-none"
                  earned={investmentDetailData?.[0]?.today_earning}
                />
                <div id="_fourth" className="flex flex-col gap-3 px-5">
                  <div className="grid grid-cols-2" k>
                    <PortfolioInfoText
                      text={"Interest Payout"}
                      className="text-[12px] leading-5 "
                    />
                    <PortfolioInfoText
                      text={investmentDetailData?.[0]?.fd_payout_method}
                      className={`text-right text-[#1B1B1B] `}
                    />
                  </div>
                  <div className="grid grid-cols-2" k>
                    <PortfolioInfoText
                      text={"Maturity Amount"}
                      className="text-[12px] leading-5 "
                    />
                    <PortfolioInfoText
                      text={investmentDetailData?.[0]?.maturity_amount}
                      className={`text-right text-[#1B1B1B]`}
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <PortfolioInfoText
                      text={"Total Interest Earned"}
                      className="text-[12px] leading-5 "
                    />
                    <PortfolioInfoText
                      text={investmentDetailData?.[0]?.total_interest_earned}
                      className={`text-right text-[#1B1B1B] ${true && "text-[#21B546]"}`}
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <PortfolioInfoText
                      text={"Average Annual Yield"}
                      className="text-[12px] leading-5 "
                    />
                    <PortfolioInfoText
                      text={investmentDetailData?.[0]?.annual_yield}
                      className={`text-right text-[#1B1B1B] `}
                    />
                  </div>
                  <div className="grid grid-cols-2" k>
                    <PortfolioInfoText
                      text={"Invested on"}
                      className="text-[12px] leading-5 "
                    />
                    <PortfolioInfoText
                      text={investmentDetailData?.[0]?.created_on}
                      className={`text-[#1B1B1B]} text-right`}
                    />
                  </div>
                  <div className="grid grid-cols-2" k>
                    <PortfolioInfoText
                      text={"Maturity on"}
                      className="text-[12px] leading-5 "
                    />
                    <PortfolioInfoText
                      text={investmentDetailData?.[0]?.fd_maturity_date}
                      className={`text-right text-[#1B1B1B] `}
                    />
                  </div>
                  <div className="grid grid-cols-2" k>
                    <PortfolioInfoText
                      text={"Maturity Action"}
                      className="text-[12px] leading-5 "
                    />
                    <PortfolioInfoText
                      text={investmentDetailData?.[0]?.maturity_action_name}
                      className={`text-right text-[#1B1B1B] `}
                    />
                  </div>
                </div>

                <h4
                  id="_button"
                  className=" semi-bold-text relative  left-[50%]  hidden translate-x-[-50%] text-center text-[12px] leading-6 tracking-[-0.2px] text-[#21B546]"
                >
                  Edit Maturity Action
                </h4>
              </div>

              <div
                id="_box"
                className="flex items-end justify-between rounded-xl border-[0.5px] bg-white p-5"
              >
                <div id="_left" className="flex flex-col gap-5">
                  <div id="_top" className="flex flex-col gap-3">
                    <h3 className="bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B]">
                      Withdraw Funds
                    </h3>
                    <p className="regular-text text-[12px] leading-5 tracking-[-0.2px] text-[#455468]">
                      Withdraw your funds with ease in your registered bank
                      account
                    </p>
                  </div>

                  <Button
                    label="Withdraw Now"
                    className={`medium-text medium-text mt-0  h-fit w-fit bg-custom-green px-3 py-[6px] text-sm leading-6 tracking-[-0.2px] text-[#fff]
            md:mt-0 ${false ? "opacity-60" : "opacity-100"}`}
                    onClick={() =>
                      toast.success(
                        "The withdrawal option will be available after 3 months.",
                      )
                    }
                  />
                </div>
                <img src="/images/cash-money.svg" alt="cash" />
              </div>

              <div id="_spacing" className="h-6"></div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default InvestmentDetails;
