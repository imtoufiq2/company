import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";


const ProfileCard = () => {
  return (
    <div className="flex min-h-[240px] min-w-[272px] flex-col justify-between rounded-xl bg-[#FFF9DF] md:min-w-[19rem]">
      <TextDisplay
      // `text-base leading-7 tracking-[-0.3] text-[#455468] whitespace-nowrap overflow-hidden w-fit`,
        id="top"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.”"
        elementType="p"
        className="regular-text whitespace-normal p-5 text-sm  leading-6 tracking-[-0.2] text-[#1B1B1B] md:text-base md:leading-7 md:tracking-[-0.3] "
      />
      <div
        id="bottomBox"
        className="flex min-h-[76px] gap-3  bg-[#FFF2C4] p-5 rounded-b-xl"
      >
        <div id="leftAvatar" className="h-9 w-9">
          <Image src="/images/avatar image.svg" alt="avatar images" />
        </div>

        <div id="rightContent" className="tracking-[-0.2]">
          <h3 className="text-sm   leading-6 text-[#1B1B1B] medium-text tracking-[-0.2]">
            Saurabh Awasthi
          </h3>
        
          <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D] ">
            Mumbai
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
