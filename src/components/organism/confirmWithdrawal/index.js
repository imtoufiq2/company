//atoms
import TextSmallLight from '../../atoms/textSmallLight'
import Heading from '../../atoms/headingContent/Heading'
//molecules 
import BankLogo from '../../molecules/bankLogo'
import ButtonNavigateDashboard from '../../molecules/buttonNavigateDashboard'
import CongratulatoryMessage from '../../molecules/congratulatoryMessage'
// organisms
import ReferralCard from '../referralCard'

const ConfirmWithdrawal = () => {
  sessionStorage.removeItem("showErrorPopUp")
  return (
    <div className="mx-auto mb-8 px-6 sm:px-0 mt-8 flex max-w-[1008px] flex-col gap-5  md:gap-7 w-full sm:max-w-[592px]">
    {/* <div className="mx-auto my-8 flex  w-[90%] max-w-[592px] flex-col  gap-5 md:w-[65%] lg:w-[50%]"> */}
    <CongratulatoryMessage message="Withdrawal registered successfully" />
    <div
      id="_box"
      className="flex flex-col gap-4 rounded-xl border-[0.5px] bg-white p-5 md:gap-5 md:p-8"
    >
      <div id="_header" className="flex items-center gap-4">
        <BankLogo />
        <Heading
          text="State Bank of India "
          type="h3"
          className="bold-text text-base leading-7 md:text-xl"
        />
      </div>
      <div id="_div" className="flex flex-col gap-4">
        <div id="_second" className="flex flex-col gap-2">
          <TextSmallLight
            text="Net Withdraw Amount"
            className="regular-text md:text-sm md:leading-6"
          />
          <h4 className="bold-text text-2xl leading-8 tracking-[-0.5px]">
            <span className="regular-text text-base leading-8 tracking-[-0.5px]">₹ </span>
            2,08,580.00
          </h4>
        </div>
        <p
          id="_third"
          className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#1B1B1B] md:text-sm md:leading-6"
        >
          Amount will get credited in your registered{" "}
          <span className="semi-bold-text">Yes Bank account XXXX2239 </span>
          within 2-3 business days.
        </p>
      </div>
      <TextSmallLight
        text="Transaction ID: 837489BYSN009"
        className="regular-text"
      />
    </div>
    <ReferralCard isModify={true} />
    <ButtonNavigateDashboard />
    <div id="_spacing" className="h-6"></div>
  </div>
  )
}

export default ConfirmWithdrawal