import React from 'react'
import Button from '../../atoms/button/Button';
import Image from '../../atoms/Image';
import PortfolioInfoText from '../../atoms/PortfolioInfoText';
import ChevronNormal from '../../../Icons/Chevron-normal';
import Heading from '../../atoms/headingContent/Heading';
import BankLogo from '../../molecules/bankLogo';
import { investmentDetails } from '../../../constants/staticData';

const PreviewMaturityAction = ({hanldeClickNext}) => {

  return (
    <div className="mx-auto flex h-fit max-w-[592px] flex-col gap-5 rounded-md border p-2 md:w-[592px] md:rounded-xl md:p-8">
    <div id="_first">
      <Heading
        text="Maturity Action"
        type="h3"
        className="text-xl leading-8 text-[#1B1B1B]"
      />
      <PortfolioInfoText text="Choose your action on maturity of your FD" />
    </div>
    <div id="_second" className="flex flex-col rounded-md border ">
      <div
        id="_top"
        className="flex flex-col gap-4 bg-slate-200 p-5 md:gap-5"
      >
        <div id="_icon_with_name" className="flex items-center gap-2">
          <BankLogo
            divClassName="h-[32px]  w-[32px] "
            imageClassName="h-[19.2px] w-[19.2px] lg:h-[19.2px] lg:w-[19.2px]"
          />
          <Heading
            text="State Bank of India "
            type="h3"
            className="text-base leading-7 text-[#1B1B1B]"
          />
        </div>

        <div className="flex flex-col gap-4">
          {investmentDetails?.map((curData, index) => {
            return (
              <div className="flex items-center justify-between" key={index}>
                <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                  {curData?.data}
                </p>
                <p
                  className={` text-right text-sm leading-6 tracking-[-0.2] ${index === 4 || index === 5 ? "semi-bold-text" : "medium-text"} ${index === 5 ? "text-[#21B546]" : ""}`}
                >
                  {curData?.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="_bottom"
        className="flex items-center justify-between gap-3 p-5"
      >
        <div
          id="_left"
          className="semi-bold-text flex items-center  gap-0 text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] md:gap-1"
        >
          <span className="semi-bold-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
            {" "}
            Choose Maturity Action
          </span>
          <img src="/images/info-icon.svg" alt="info-icon" />
        </div>
        <div id="_right">
          <aside className="relative bg-white">
            <select className=" medium-text appearance-none rounded-md border bg-white py-2 pl-3 pr-9 text-sm leading-6 tracking-[-0.2] outline-none hover:cursor-pointer">
              <option>Re-invest</option>
              <option>Re-invest two</option>
            </select>

            <ChevronNormal />
          </aside>
        </div>
      </div>
    </div>
    {/* // import this components as <HighlightsInfo/> */}
    <div id="_third" className="flex flex-col gap-2">
      <p className="semi-bold-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
        Important Highlights
      </p>
      <p className="flex items-start  gap-2">
        <Image src="/images/tick-icon.svg" alt="icon" />

        <PortfolioInfoText
          text="Withdraw your money anytime after 7 days"
          className="text-[#1B1B1B]"
        />
      </p>
      <p className="flex items-start gap-2">
        <img src="/images/tick-icon.svg" alt="" />
        <span className="regular-text text-sm leading-6 tracking-[-0.2]">
          Getting additional{" "}
          <span className="semi-bold-text text-[#1B1B1B]">
            0.5% Sr. Citizen Interest
          </span>
        </span>
      </p>
    </div>
    <Button
      onClick={hanldeClickNext}
      label="Make Payment"
      className={`medium-text mx-auto  mb-2 w-fit max-w-[350px] bg-[#21B546] px-5 py-[10px] text-[16px] leading-7 tracking-[-0.3] text-[#fff] duration-300 md:w-[350px]`}
    />{" "}
    <div id="_fifth" className="mx-auto flex items-center gap-2">
      <Image src="/images/secure-icon.svg" alt="icon" />
      <PortfolioInfoText
        text="100% Safe & Secure Payment"
        className="medium-text text-xs leading-5 text-[#8897AE] "
      />
    </div>
  </div>
  )
}

export default PreviewMaturityAction