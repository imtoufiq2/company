import React, { useEffect, useState } from 'react'
import EarnedTodayMessage from '../../atoms/earnedTodayMessage';
import Button from '../../atoms/button/Button';
import TextSmallLight from '../../atoms/textSmallLight';
import InfoHeader from '../../molecules/infoHeader';
import { AiOutlineClose } from 'react-icons/ai';
import HighlightsInfo from '../../molecules/highlightsInfo';
import Moadal from '../modal';
import ChevronNormal from '../../../Icons/Chevron-normal';

const WithdrawalPromt = ({ClickPrevious , ClickNext , currentPromt,hanldeClickNext }) => {
    const [isModalActive, setIsModalActive] = useState(true);
  
  
    const arr = [
      {
        value: "25%",
      },
      {
        value: "50%",
      },
      {
        value: "75%",
      },
      {
        value: "MAX",
      },
    ];

   
    const firstModalData = (
      <div className="relative top-4 flex h-full w-fit  max-w-[40rem] flex-col rounded-lg  border-0 bg-white p-5 shadow-lg outline-none focus:outline-none lg:h-auto">
        <div className="relative flex flex-col  justify-between gap-5 rounded-t">
          <div id="_header_part" className="flex flex-col gap-4">
            <img
              src="/images/withdraw-rupess-icon.svg"
              alt="rupess"
              className="h-[5.5rem] w-[5.5rem]"
            />
            <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-2xl md:tracking-[-0.5]">
              You’re losing on your returns
            </h3>
          </div>
          <p className="regular-text text-sm leading-6 tracking-[-0.2]">
            Are you sure you want to withdraw? You will be losing{" "}
            <span className="semi-bold-text">₹1,62,340</span> from your potential
            maturity earnings of{" "}
            <span className="semi-bold-text">₹3,70, 920</span> for withdrawing
            before the maturity date.
          </p>
          <div
            id="_button"
            className="mt-3 flex flex-col-reverse items-center gap-2 sm:flex-row sm:flex-nowrap sm:gap-5"
          >
            <Button
              label="Yes, Withdraw Anyway"
              className="medium-text h-fit rounded-md border py-2  text-base leading-7 text-[#21B546]"
              // onClick={()=>ClickNext("WITHDRAWAL_ REASON")}
              onClick={()=>{
                console.warn('checasfdasdfk')
                ClickNext("WITHDRAWAL_REASON")
              }} 
              // onClick={()=>{
              // console.warn("open the second")
              // }}
            />
            <Button
              label="No, Don’t Withdraw"
              className="medium-text h-fit bg-[#21B546] py-2 text-base  leading-7 text-[#FFFFFF]"
              // onClick={ClickPrevious}
              // onClick={()=>ClickPrevious("")}
              onClick={()=>hanldeClickNext("WITHDRAW_FUNDS")}
              // onClick={()=>console.warn("click the prviosu")}
            />
          </div>
          <button
            className="absolute right-0 ml-auto  border-0 p-1 transition hover:opacity-70"
            onClick={() => setIsModalActive(!isModalActive)}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      </div>
    );
    const secondModalData = (
      <div className="relative top-4 mx-auto flex  h-full w-full max-w-[39.25rem]  flex-col rounded-lg border-0 bg-white p-5 shadow-lg outline-none focus:outline-none lg:h-auto">
        <div className="relative flex   flex-col justify-between gap-5 rounded-t">
          <h3 className="bold-text text-xl leading-8  tracking-[-0.3] text-[#1B1B1B] md:text-2xl md:tracking-[-0.5]">
            Reason for Withdraw
          </h3>
  
          <div id="_middle" className="flex flex-col gap-[6px]">
            <label
              htmlFor=""
              className="medium-text text-sm leading-6  tracking-[-0.2] text-[#3D4A5C]"
            >
              Please select reason for withdraw
            </label>
            <aside className="relative bg-white">
              {/* sm:min-w-[30rem] md:min-w-[35.25rem] */}
              <select className=" medium-text w-full appearance-none rounded-md border bg-white py-2 pl-3 pr-9 text-sm leading-6 tracking-[-0.2] outline-none hover:cursor-pointer ">
                <option value="maturity">Need funds for an emergency</option>
                <option value="monthly">1 yrs</option>
                <option value="quarterly">2 yrs</option>
              </select>
              <ChevronNormal/>
            </aside>
          </div>
          <div
            id="_button"
            className="mt-8 flex flex-col-reverse items-center gap-2 sm:flex-row sm:flex-nowrap sm:gap-5"
          >
            <Button
              label="Submit & Withdraw"
              className="medium-text h-fit bg-[#21B546] py-2 text-base  leading-7 text-[#FFFFFF]"
              // onClick={ClickNext}
              // onClick={() => {
              //   ClickNext();
              //   // hanldeClickNext("CONFIRM_WITHDRAW");
              // }}
              onClick={()=>{
                ClickNext("")
                hanldeClickNext("CONFIRM_WITHDRAW")
              }} 
            />
          </div>
          <button
            className="absolute right-0 ml-auto  border-0 p-1 transition hover:opacity-70"
            onClick={() => setIsModalActive(!isModalActive)}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      </div>
    );


    return (
      <div className="mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[65%] md:gap-7 lg:w-[50%]  ">
        {isModalActive && (
          <Moadal
            isModalActive={isModalActive}
            setIsModalActive={setIsModalActive}
            body={currentPromt ==="WITHDRAWAL_WARNING" ?firstModalData :secondModalData}
            isModified //pass this only when we want 100% width
          />
        )}
        <InfoHeader
          title="Withdraw Funds"
          description="Withdraw your funds with ease in your registered bank account"
        />
  
        <div id="_second" className="flex flex-col gap-2">
          <div id="_top" className="flex flex-col gap-[0.375rem]">
            <TextSmallLight
              text="Amount to Withdraw"
              className="medium-text text-sm leading-6 text-[#3D4A5C]"
            />
            <input
              type="text"
              placeholder="Enter withdrawal amount"
              className="medium-text max-h-[2.875rem] w-full rounded-md border bg-white p-[11px] px-3 text-sm leading-7 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
            />
          </div>
          <div id="_bottom" className="flex items-center justify-between">
            <div id="_left" className="text-[#5E718D]">
              <span className="regular-text text-[10px] leading-[12.45px] tracking-[-0.2]">
                Current FD Value
              </span>
              <span className="bold-text block text-[10px] leading-[12.45px] tracking-[-0.2] sm:inline-block">
                ₹ 2,17,500.00
              </span>
            </div>
            <div id="_right" className="flex flex-wrap gap-2">
              {arr?.map((cur, index) => {
                return (
                  <span
                    className="medium-text h-fit cursor-pointer rounded-md border bg-white px-2 py-1 text-[12px] leading-5 tracking-[-0.2] text-[#5E718D]"
                    key={index}
                  >
                    {cur?.value}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        {/* do here */}
        <div className="flex flex-col gap-3">
          <p className="medium-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
            Summary
          </p>
          <div className="flex flex-col gap-5 rounded-md border-[0.5px] bg-white pt-5">
            <div id="_top" className="flex flex-col gap-4 px-5">
              <div id="_header" className="flex items-center gap-4">
                <img
                  src="/images/bankLogo.svg"
                  alt="bankLogo"
                  className="h-10 w-10"
                />
                <div id="_right">
                  <h3 className="bold-text text-lg leading-[30px] tracking-[-0.3]">
                    Bajaj Finserv
                  </h3>
                  <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                    Invested on 12 Mar 2024 • 12:43 PM
                  </p>
                </div>
              </div>
              <div id="_first" className="flex items-center justify-between">
                <div id="_left">
                  <TextSmallLight
                    text="Total Investment"
                    className="regular-text"
                  />
                  {/* <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[##5E718D]"></p> */}
                  <p>₹ 2,00,000.00</p>
                </div>
                <div id="_right">
                  <TextSmallLight text="Interest Rate" className="regular-text" />
  
                  <p>
                    8.75% <span>p.a.</span>
                  </p>
                </div>
              </div>
              <div id="_second" className="flex items-center justify-between">
                <div id="_left">
                  <TextSmallLight text="Tenure" className="regular-text" />
                  <p>3 yrs</p>
                </div>
                <div id="_right">
                  <TextSmallLight
                    text="Current Earnings"
                    className="regular-text"
                  />
  
                  <p>₹ 17,500.00</p>
                </div>
              </div>
              <div id="_third" className="flex justify-between">
                <TextSmallLight text="Interest Payout" className="regular-text" />
  
                {/* ` text-xs leading-5 tracking-[-0.2] text-[#5E718D]`, */}
                <TextSmallLight
                  text="At maturity"
                  className="regular-text text-right text-sm leading-6 text-[#1B1B1B]"
                />
              </div>
              <div id="_fourth" className="flex justify-between">
                <TextSmallLight text="Maturity on" className="regular-text" />
  
                <TextSmallLight
                  text="11 Mar 2027"
                  className="regular-text text-right text-sm leading-6 text-[#1B1B1B]"
                />
              </div>
              <div id="_fifth" className="flex justify-between">
                <TextSmallLight text="Maturity Amount" className="regular-text" />
                <div id="_right"></div>
                <TextSmallLight
                  text="₹ 3,70,920.00"
                  className="regular-text text-right text-sm leading-6 text-[#1B1B1B]"
                />
              </div>
              <div id="_sixth" className="flex justify-between">
                <TextSmallLight text="Current Value" className="regular-text" />
  
                <TextSmallLight
                  text="₹ 2,17,500.00"
                  className="regular-text text-right text-sm leading-6 text-[#1B1B1B]"
                />
              </div>
              <div id="_seventh" className="flex justify-between">
                <TextSmallLight
                  text="Penalty Amount (-X%)"
                  className="regular-text text-[#D21A0E]"
                />
  
                <TextSmallLight
                  text="- ₹ 8,920.00"
                  className="regular-text text-right text-sm leading-6 text-[#D21A0E]"
                />
              </div>
              <div id="_eight" className="flex justify-between">
                <TextSmallLight
                  text="Net Withdraw Amount"
                  className=" font-bold  text-[#1B1B1B]"
                />
                <div id="_right"></div>
                <TextSmallLight
                  text="₹ 2,08,580.00"
                  className="semi-bold-text text-right text-sm leading-6 text-[#1B1B1B]"
                />
              </div>
  
              <div
                id="_button"
                className="flex flex-wrap items-center gap-2 sm:flex-nowrap md:gap-5"
              >
                <Button
                  label="Go Back"
                  className="medium-text h-fit rounded-md border py-2  text-base leading-7 text-[#21B546]"
                />
                <Button
                  label="Withdraw"
                  className="medium-text h-fit bg-[#21B546] py-2 text-base  leading-7 text-[#FFFFFF]"
                />
              </div>
            </div>
  
            <EarnedTodayMessage
              text="You’ll lose D 1,62,340 for early-maturity withdraw"
              className="bg-[#FFDCDA] text-[#D21A0E]"
            />
          </div>
        </div>
  
        <HighlightsInfo
          text1="If you withdraw today, you will be paying penalty fee of X% on your current value."
          text2="Amount will get credited in your registered Yes Bank account XXXX2239 within 2-3 business days."
        />
        <div id="_spacing" className="h-6"></div>
      </div>
  )
}

export default WithdrawalPromt