import { investmentOptions } from "../../../constants/staticData"
import Button from "../../atoms/button/Button"
import TextDisplay from "../../atoms/textContent/TextContent"
import ActionSection from "../actionSection"
import InvestmentOptionsSection from "../investmentOptionsSection"

const FDOptionsExplorer = () => {
  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-4 md:w-[75%] md:gap-10 ">
    <div id="topContent">
      <h2 className="text-[20px] font-bold leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-4xl md:font-semibold md:leading-[44px]  md:tracking-[-0.1]">
        <span className="text-[#21B546]">Discover FDs</span> <span>based on your{" "}</span>
        <span className="block"> requirements</span>
      </h2>
    </div>
    
    <InvestmentOptionsSection investmentOptions={investmentOptions} />
    <ActionSection className="flex items-center justify-between gap-3 bg-[#15362B] p-6">
      <TextDisplay
        id="left"
        className="flex items-center gap-1  text-sm font-bold leading-6 tracking-[-0.2] text-white md:text-xl md:leading-8 md:tracking-[-0.3]"
        text="Not sure which FD to invest in?"
      />
      <Button
        label="Try FD Finder"
        className="h-fit w-fit rounded-md  bg-[#21B546] px-3 py-[6px]  text-sm leading-6 tracking-[-0.2] transition-all duration-200 ease-in-out active:scale-[0.99] md:px-5 md:py-[10px] md:leading-7 md:tracking-[-0.3]"
      />
    </ActionSection>
  </div>
  )
}

export default FDOptionsExplorer
