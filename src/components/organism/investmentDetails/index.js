import React from 'react'
import Heading from '../../atoms/headingContent/Heading';
import PortfolioInfoText from '../../atoms/PortfolioInfoText';
import EarnedTodayMessage from '../../atoms/earnedTodayMessage';
import HighlightsInfo from '../../molecules/highlightsInfo';
import Button from '../../atoms/button/Button';
import { portfolioData } from '../../../constants/staticData';
const InvestmentDetails = ({hanldeClickNext}) => {
 
  return (
    <div className="mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[65%] md:gap-7 lg:w-[50%]  ">
      <div id="_header">
      {/* // <InfoHeader use as re usable */}
        <h3 className="bold-text text-xl leading-8 tracking-[-0.3]">
          FD Details
        </h3>
        <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
          Check the details of your investment
        </p>
      </div>
      <div
        id="_second_one_box"
        className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white py-5"
      >
        <div id="_top" className="flex flex-col gap-5 px-5">
          <div id="_first" className="flex items-center gap-3">
            <img
              src="/images/bankLogo.svg"
              alt="bankLogo"
              className="h-10 w-10"
            />
            <div id="_logo_right">
              <h3 className="bold-text text-base leading-7 tracking-[-0.3] text-[#1B1B1B]">
                Bajaj Finserv
              </h3>
              <p className="regular-text text-[12px] leading-5 tracking-[-0.2] text-[#5E718D]">
                Invested on 12 Mar 2024 • 12:43 PM
              </p>
            </div>
          </div>
          <div id="_second" className="flex items-center justify-between">
            <div id="_second_left">
              <PortfolioInfoText
                text="Total Investment"
                className=" text-[12px] leading-5 text-slate-500"
              />

              <Heading
                text="₹ 2,00,000.00"
                type="h3"
                className="semi-bold-text text-base  leading-7 text-[#1B1B1B]"
              />
            </div>
            <div id="_second_right">
              <PortfolioInfoText
                text="Interest Rate"
                className=" text-[12px] leading-5 text-slate-500"
              />

              <h3 className="semi-bold-text text-base  leading-7 tracking-[-0.3] text-[#21B546]">
                8.75%{" "}
                <span className="text-[12px] leading-5 tracking-[-0.2]">
                  p.a.
                </span>
              </h3>
            </div>
          </div>
          <div id="_third" className="flex items-center justify-between">
            <div id="_third_left">
              <PortfolioInfoText
                text="Tenure"
                className=" text-[12px] leading-5 text-slate-500"
              />
              <Heading
                text="3 yrs"
                type="h3"
                className="semi-bold-text text-base  leading-7 text-[#1B1B1B]"
              />
            </div>
            <div id="_third_right">
              <PortfolioInfoText
                text="Current Earnings"
                className=" text-[12px] leading-5 text-slate-500"
              />

              <Heading
                text="₹ 17,500.00"
                type="h3"
                className="semi-bold-text text-base  leading-7 text-[#21B546]"
              />
            </div>
          </div>
        </div>
        <EarnedTodayMessage className="rounded-b-none" />
        <div id="_fourth" className="flex flex-col gap-3 px-5">
          {portfolioData?.map((curData, index) => {
            return (
              <div className="grid grid-cols-2" key={index}>
                <PortfolioInfoText
                  text={curData?.data}
                  className="text-[12px] leading-5 "
                />
                <PortfolioInfoText
                  text={curData?.value}
                  className={`text-right text-[#1B1B1B] ${index === 2 && "text-[#21B546]"}`}
                />
              </div>
            );
          })}
        </div>

        <button
          id="_button"
          //   border-b-2

          className="semi-bold-text  relative left-[50%] translate-x-[-50%] text-[12px] leading-6 tracking-[-0.2] text-[#21B546]"
        >
          Edit Maturity Action
        </button>
      </div>
  
      <HighlightsInfo />
      <div
        id="_box"
        className="flex items-end justify-between rounded-xl border-[0.5px] bg-white p-5"
      >
        <div id="_left" className="flex flex-col gap-5">
          <div id="_top" className="flex flex-col gap-3">
            <h3 className="bold-text text-base leading-7 tracking-[-0.3] text-[#1B1B1B]">
              Withdraw Funds
            </h3>
            <p className="regular-text text-[12px] leading-5 tracking-[-0.2] text-[#455468]">
              Withdraw your funds with ease in your registered bank account
            </p>
          </div>

          <Button
            label="Withdraw Now"
            className={`medium-text medium-text mt-0  h-fit w-fit bg-custom-green px-3 py-[6px] text-sm leading-6 tracking-[-0.2] text-[#fff]
              md:mt-0 ${false ? "opacity-60" : "opacity-100"}`}
              onClick={hanldeClickNext}
          />
        </div>
        <img src="/images/cash-money.svg" alt="" />
      </div>

      <div id="_spacing" className="h-6"></div>
    </div>
  )
}

export default InvestmentDetails