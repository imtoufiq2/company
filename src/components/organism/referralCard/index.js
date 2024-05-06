import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";
import Button from "../../atoms/button/Button";
import Image from "../../atoms/Image";
import AssistanceContainer from "../assistanceContainer";
import LeftSection from "../section/Left";
import RightSection from "../section/Right";

const ReferralCard = ({isModify}) => {
  return (
    <AssistanceContainer className={` mx-auto my-4 flex min-h-fit w-[90%]  max-w-[1008px]  items-center gap-4 rounded-xl bg-[#048746] p-5 sm:p-7 sm:py-5 md:w-[75%] ${isModify && "w-full md:w-full m-0 md:m-0"}`}>
      <LeftSection className="sm:w[60%] flex w-[100%] flex-col justify-between gap-8 sm:gap-3">
        <Heading
          text="Refer your friend and earn rewards"
          type="h2"
          className=" text-[18px] text-white   sm:text-2xl bold-text"
        />

        <TextDisplay
          text="Share your referral link with your friends to invite them to Altcase
        and earn rewards when they invest."
          className="hidden max-w-[509px] overflow-auto whitespace-normal text-sm regular-text leading-6 tracking-[-0.2] text-[#C2F2CE]	sm:block "
        />

        <Button
          className="flex w-full  max-w-[162px] gap-1 rounded-md px-3 py-[6px] sm:px-[20px]  sm:py-[10px]"
          onClick={() => console.log("Button clicked")}
          newStructure={true}
        >
          <Image
            src="/images/UserPlus.svg"
            alt="Talk to our expert"
            className="h-5 w-5"
          />

          <TextDisplay
            id="example"
            text="Refer a friend"
            elementType="span"
            className="text-sm  leading-6 tracking-[-0.2] text-[#21B546] medium-text"
          />
        </Button>
      </LeftSection>
      <RightSection className="sm:w[60%] w-[56%]">
        <Image
          src="/images/OBJECTS.svg"
          alt="mic icon"
          className="hidden sm:block"
        />
        <Image
          src="/images/referAndEarnIcon.svg"
          alt="mic icon"
          className="sm:hidden"
        />
      </RightSection>
    </AssistanceContainer>
  );
};

export default ReferralCard;
