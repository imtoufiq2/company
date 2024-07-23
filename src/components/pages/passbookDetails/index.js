import React, { useCallback, useEffect, useState } from "react";
import PassbookArrowIcon from "../../../Icons/PassbookArrowIcon";
import LeftArrow from "../../../Icons/LeftArrow";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../utils/Crypto";

import { formatNumberIndian } from "../../../utils/commonUtils";
import EmptyState from "../../organism/emptyState";
import Loader from "../../organism/loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPassbook } from "../../../redux/actions/portfolio";
import { fetchWithWait } from "../../../utils/method";

const PassbookDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("All");


  const {
    ApplicationLoader: { loading },
    portfolioPage: { passbookData, passbookError },
  } = useSelector((state) => state);

  // Function to filter transactions based on selected type
  const filterTransactions = (transaction) => {
    if (selected === "All") return true;
    if (selected === "Investments")
      return transaction?.transaction_status === 1;
    if (selected === "Withdrawals")
      return transaction?.transaction_status === 0;
    return true;
  };

  //function to getPassbook
  const getPassbook = useCallback(() => {
    const data = {
      investor_id: getData("userData")?.investor_id,
    };
    fetchWithWait({ dispatch, action: fetchPassbook(data) });
  }, [dispatch]);

  //calling getPassbook
  useEffect(() => {
    getPassbook();
  }, [getPassbook]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-auto mt-6 flex w-full max-w-[1008px] flex-col gap-6 px-6 pb-6 text-[#1B1B1B] sm:max-w-[592px] sm:px-0 md:mt-8 md:pb-8">
          <span className="mb-3 md:hidden">
            <LeftArrow
              width="20"
              height="20"
              onClick={() => navigate("/portfolio")}
            />
          </span>

          <div id="_header" className="flex flex-col gap-2">
            <h4 className="bold-text text-xl leading-6 tracking-[-0.3px]">
              Passbook
            </h4>
            <p className="regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
              Check the details of your transactions
            </p>
          </div>

          {passbookError ? (
            "Something went wrong"
          ) : (
            <>
              {passbookData?.length > 0 ? (
                <div id="_tags" className="flex items-center gap-3">
                  {["All", "Investments", "Withdrawals"].map((type) => (
                    <button
                      key={type}
                      className={`medium-text rounded-md px-2 py-1 text-sm leading-6 tracking-[-0.2px] ${
                        selected === type
                          ? "border border-[#28BF4E] text-[#28BF4E]"
                          : "bg-[#F0F3F9] text-[#5E718D]"
                      }`}
                      onClick={() => setSelected(type)}
                      style={{
                        transition:
                          "background-color 200ms ease-in-out, color 200ms ease-in-out, border-color 200ms ease-in-out",
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              ) : (
                <EmptyState heading="Earn up to 9.40% assured returns
" btn="Discover FDs" onClick={()=>navigate("/invest")} />
              )}

              <div className="flex flex-col gap-3">
                {passbookData?.filter(filterTransactions)?.length > 0
                  ? passbookData
                      .filter(filterTransactions)
                      .map((transaction) => (
                        <div
                          key={transaction.id}
                          className="relative flex flex-col gap-2 rounded-xl border-[0.5px] p-5 pl-6"
                        >
                          <div
                            id="_icon"
                            className="absolute left-0 top-1/2 -translate-x-2/4 -translate-y-2/4"
                          >
                            {!transaction?.transaction_status ? (
                              <PassbookArrowIcon />
                            ) : (
                              <PassbookArrowIcon
                                arrowColor="#21B546"
                                backgroundColor="#E8FFED"
                                rotateArrow={180}
                              />
                            )}
                          </div>
                          <div
                            id="_top"
                            className="flex items-center justify-between"
                          >
                            <div
                              id="_left"
                              className="bold-text text-sm leading-4 tracking-[-0.2px]"
                            >
                              {transaction?.transaction_status
                                ? "Investment"
                                : "Withdrawal"}
                            </div>
                            <div
                              id="_right"
                              className={`medium-text ${
                                transaction?.transaction_status
                                  ? "text-[#21B546]"
                                  : "text-[#D21A0E]"
                              }`}
                            >
                              {!transaction?.transaction_status && "-"}
                              <span className="regular-text text-sm leading-4 tracking-[-0.2px]">
                                ₹
                              </span>
                              {transaction?.investment_amount
                                ? formatNumberIndian(
                                    transaction?.investment_amount,
                                  )
                                : 0}
                            </div>
                          </div>
                          <div
                            id="_bottom"
                            className="flex items-center justify-between"
                          >
                            <div
                              id="_left"
                              className="regular-text text-xs leading-4 tracking-[-0.2px]"
                            >
                              {transaction?.fd_name}
                            </div>
                            <div
                              id="_right"
                              className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]"
                            >
                              {transaction?.transaction_date}
                            </div>
                          </div>
                        </div>
                      ))
                  : null}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PassbookDetails;
