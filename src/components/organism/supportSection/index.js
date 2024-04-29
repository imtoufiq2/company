import Heading from "../../atoms/headingContent/Heading";
import TextDisplay from "../../atoms/textContent/TextContent";
import Button from "../../atoms/button/Button";
import Image from "../../atoms/Image";
import AssistanceContainer from "../assistanceContainer";
import LeftSection from "../section/Left";
import RightSection from "../section/Right";

const SupportSection = () => {
  return (
    <AssistanceContainer className="   min-h-fit items-center rounded-xl bg-[#048746] p-5 sm:p-7 ">
      <LeftSection className="sm:w[60%] flex w-[100%] flex-col justify-between gap-8 sm:gap-3">
        <Heading
          text="Need help with your FD investment?"
          type="h2"
          className=" text-[18px] text-white   sm:text-2xl "
        />

        <TextDisplay
          text="Our expert financial advisors will guide you through a step-by-step
          process towards a safe and high returns investment."
          className="hidden max-w-[509px] overflow-auto whitespace-normal text-sm regular-text leading-6 tracking-[-0.2] text-[#C2F2CE]	sm:block "
        />

        <div
          id="button"
          className="hidden flex-col gap-2 text-white sm:flex lg:flex-row"
        >
          {/* Phone Call Button */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-[16px] leading-7 tracking-[-0.3]"
          >
            <Image src="/images/PhoneCallWhite.svg" alt="call box" />

            <TextDisplay
              id="mobile-number"
              text="Call at +91 9876 543210"
              elementType="span"
              className="text-white "
            />
          </a>

          {/* Email Button */}
          <a
            href="mailto:consult@altcase.com?subject=Your%20Subject%20Here&body=Your%20email%20body%20here"
            className="flex items-center gap-2 text-[16px] leading-7 tracking-[-0.3]"
          >
            <Image src="/images/Envelope.svg" alt="mail box" />

            <TextDisplay
              id="mobile-number"
              text="Email at consult@altcase.com"
              elementType="span"
              className="text-white"
            />
          </a>
        </div>

        <Button
          className="flex w-full max-w-[162px] items-center gap-1 rounded-md bg-[#F2FFF5] px-3  py-[6px] sm:hidden"
          onClick={() => console.log("Button clicked")}
          newStructure={true}
        >
          <Image src="/images/PhoneCall.svg" alt="Talk to our expert" />

          <TextDisplay
            id="example"
            text="Talk to our expert"
            elementType="span"
            className="text-sm medium-text leading-6 tracking-[-0.2] text-[#21B546]"
          />
        </Button>
      </LeftSection>

      <RightSection className="sm:w[60%] w-[56%]">
        <Image src="/images/need-help-icon.svg" alt="help icon" />
      </RightSection>
    </AssistanceContainer>
  );
};

export default SupportSection;
