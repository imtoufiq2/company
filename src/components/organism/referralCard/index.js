import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";
import Button from "../../atoms/button/Button";
import Image from "../../atoms/Image";
import AssistanceContainer from "../assistanceContainer";
import LeftSection from "../section/Left";
import RightSection from "../section/Right";
import { useNavigate } from "react-router-dom";

const ReferralCard = ({ isModify , isPayment }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <AssistanceContainer
        className={` mx-auto  my-0 flex min-h-fit  w-[90%] max-w-[1008px]  items-center gap-4 rounded-xl bg-[#048746] p-5 sm:p-7 sm:py-5 md:w-[75%] ${isModify && "m-0 w-full md:m-0 md:w-full"}`}
      >
        <LeftSection className="sm:w[60%] flex w-[100%] flex-col justify-between gap-8 sm:gap-3">
          <Heading
            text="Refer your friend and earn rewards"
            type="h2"
            className=" bold-text text-[18px]   text-white sm:text-2xl"
          />

          <TextDisplay
            text="Share your referral link with your friends to invite them to Altcase
        and earn rewards when they invest."
            className="regular-text hidden max-w-[509px] overflow-auto whitespace-normal text-sm leading-6 tracking-[-0.2] text-[#C2F2CE]	sm:block "
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
              onClick={() => navigate("/earnRewards")}
              elementType="span"
              className="medium-text  text-sm leading-6 tracking-[-0.2] text-[#21B546]"
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
      </AssistanceContainer> */}
      {/* ================= updated code ============ */}

      <div id="_mobile"
        className={` relative   max-h-[168px] w-[90%] max-w-[1008px] items-center gap-4 overflow-hidden   rounded-xl bg-[#048746] p-0 sm:hidden  md:m-0 md:w-[75%] ${isModify && "w-full"}`}
        // style={{ border: "1px solid red" }}
      >
        <div
          className=" relative   h-[168px] w-full "
          style={{
            backgroundImage: "url('/images/refer-image.svg')",

            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src="/images/refer-image.svg" alt="" /> */}
        </div>
        {/* w-full text-white justify-between gap-11 absolute left-5 flex flex-col */}
        <LeftSection className=" absolute left-5 top-2/4 flex -translate-y-2/4 flex-col gap-10">
          <Heading
            text="Refer your friend and earn rewards"
            type="h2"
            className=" bold-text max-w-[183px] text-[18px]   text-white sm:min-w-full sm:text-2xl sm:tracking-[-0.3]"
          />

          <Button
            className="flex w-full  max-w-[162px] gap-1 rounded-md px-3 py-[6px] sm:px-[20px]  sm:py-[10px] "
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
              onClick={() => navigate("/earnRewards")}
              elementType="span"
              className="medium-text  text-sm leading-6 tracking-[-0.2] text-[#21B546]"
            />
          </Button>
        </LeftSection>
      </div>

      {/* ============ this is for the desktop view =========== */}

      <div id="_myright" className={` relative   hidden w-[90%] max-w-[1008px] items-center gap-4 overflow-hidden rounded-xl   bg-[#048746] p-0 sm:flex md:m-0 md:w-[75%] ${isModify && "sm:w-full md:w-full"}`}>
        <div
          className={` relative -right-[80px] min-h-[221px] w-full   ${isPayment ? "lg:-right-24 xl:-right-[84px] 2xl:-right-[84px]":"lg:-right-16 xl:-right-5 2xl:-right-0"}   `}
          style={{
            backgroundImage: "url('/images/referYourFriend.svg')",

            backgroundPosition: "right",
          }}
        ></div>

        <LeftSection className="md:w[60%] absolute left-8 flex flex-col sm:max-w-[60%] sm:gap-2 md:max-w-[60%] md:gap-2">
          <Heading
            text="Refer your friend and earn rewards"
            type="h2"
            className=" bold-text text-[18px]   text-white sm:text-2xl"
          />

          <TextDisplay
            text="Share your referral link with your friends to invite them to Altcase
        and earn rewards when they invest."
            className="regular-text hidden max-w-[509px] overflow-auto whitespace-normal text-sm leading-6 tracking-[-0.2] text-[#C2F2CE] sm:block	lg:max-w-[585px] "
          />

          <Button
            className="flex lg:w-full w-fit  max-w-[162px] gap-1 rounded-md px-3 py-[6px] sm:mt-3  sm:px-[20px]  sm:py-[10px]  md:mt-3"
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
              onClick={() => navigate("/earnRewards")}
              elementType="span"
              className="medium-text  text-sm leading-6 tracking-[-0.2] text-[#21B546]"
            />
          </Button>
        </LeftSection>
      </div>
    </>
  );
};

export default ReferralCard;
