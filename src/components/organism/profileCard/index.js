import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";

const ProfileCard = () => {
  return (
    <div className="flex min-h-[240px] min-w-[272px] flex-col justify-between rounded-xl bg-[#FFF9DF]">
      <TextDisplay
        id="top"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.”"
        elementType="p"
        className="whitespace-normal p-5 text-sm font-normal leading-6 tracking-[-0.2] text-[#1B1B1B] md:text-[16px] md:leading-7 md:tracking-[-0.3]"
      />
      <div
        id="bottomBox"
        className="flex min-h-[76px] gap-3 rounded-xl bg-[#FFF2C4] p-5"
      >
        <div id="leftAvatar" className="h-9 w-9">
          <Image src="/images/avatar image.svg" alt="avatar images" />
        </div>

        <div id="rightContent" className="tracking-[-0.2]">
          <h3 className="text-sm font-medium  leading-6 text-[#1B1B1B]">
            Saurabh Awasthi
          </h3>
          {/* <Heading text=" Saurabh Awasthi" type = 'h3' className="text-sm font-medium  leading-6 text-[#1B1B1B]"/> */}
          <p className="text-[12px] font-normal leading-5 tracking-[-0.2] text-[#5E718D]">
            Mumbai
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
