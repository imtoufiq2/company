import Heading from "../../atoms/headingContent/Heading";
import TextDisplay from "../../atoms/textContent/TextContent";
import Button from "../../atoms/button/Button";
import Image from "../../atoms/Image";
import AssistanceContainer from "../assistanceContainer";
import LeftSection from "../section/Left";
import RightSection from "../section/Right";

const SupportSection = ({ isDetails }) => {
  return (
    <AssistanceContainer
      className={`min-h-fit  items-center gap-0 overflow-hidden rounded-xl bg-[#048746] p-5 sm:p-7 md:gap-4 lg:py-0 `}
      isDetails={isDetails}
    >
      <LeftSection
        className={`sm:w[60%] flex w-[100%] flex-col justify-between gap-10 sm:gap-2 ${isDetails && "py-5"}`}
      >
        <Heading
          text="Need help with your FD investment?"
          type="h2"
          className={`bold-text min-w-[183px]  text-lg text-white sm:text-2xl   md:text-2xl ${isDetails && "text-xl leading-[30px] tracking-[-0.3] md:leading-8 md:tracking-[-0.5]"}`}
        />

        <TextDisplay
          text="Our expert financial advisors will guide you through a step-by-step
          process towards a safe and high returns investment."
          className={`regular-text hidden max-w-[509px] overflow-auto whitespace-normal text-base leading-7 tracking-[-0.3] text-[#E8FFED]	sm:block ${isDetails && "  "}`}
        />

        <div
          id="button"
          className="hidden flex-col gap-2 text-white sm:flex sm:flex-col md:mt-3 lg:flex-row  1136:gap-10"
        >
          {/* Phone Call Button */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-[16px] leading-7 tracking-[-0.3]"
          >
            <Image src="/images/PhoneCallWhite.svg" alt="call box" />

            <TextDisplay
              id="mobile-number"
              text="Call at +91 88284 08893"
              elementType="span"
              className="medium-text text-base leading-7 tracking-[-0.3] text-white"
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
              text="Email at support@altcase.com"
              elementType="span"
              className="medium-text text-base leading-7 tracking-[-0.3] text-white"
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
            className="medium-text text-sm leading-6 tracking-[-0.2] text-[#21B546]"
          />
        </Button>
      </LeftSection>

      <RightSection className="sm:w[60%] w-[56%]">
        <Image
          src="/images/need-help-icon.svg"
          alt="help icon"
          className="relative right-[7px] hidden min-h-[123.8px] min-w-[150.72px] md:right-0 lg:block lg:min-h-[213.8px]	lg:overflow-visible lg:object-cover"
        />
        <Image
          src="/images/need-help-with.svg"
          alt="help icon"
          className="relative right-[7px] min-h-[123.8px] min-w-[150.72px] md:right-0 lg:hidden lg:min-h-[213.8px] lg:overflow-visible lg:object-cover	"
        />
      </RightSection>
    </AssistanceContainer>
  );
};

export default SupportSection;
