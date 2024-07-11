import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";
import { hexToRgba } from "../investmentCard";

const ProfileCard = ({ name, city, comment, user_logo, color_code }) => {
  console.log("color_code",color_code)

  const backgroundColor = hexToRgba(color_code, 0.3);
  return (
    <div className="flex min-w-[272px] flex-col justify-between rounded-xl bg-[#FFF9DF] md:min-w-[19rem]" style={{    backgroundColor: backgroundColor,}} >
 
      <TextDisplay
        id="top"
        text={`“${comment}”`}
        elementType="p"
        className="regular-text whitespace-normal p-5 text-sm  leading-6 tracking-[-0.2px] text-[#1B1B1B] md:text-base md:leading-7 md:tracking-[-0.3] "
      />
      <div
        id="bottomBox"
        className={`flex min-h-[76px] gap-3  rounded-b-xl bg-[${color_code}] p-5`}
        style={{backgroundColor:color_code}}
      >
        <div id="leftAvatar" className="h-9 w-9">
          <Image src="/images/avatar image.svg" alt="avatar images" />
        </div>

        <div id="rightContent" className="tracking-[-0.2px]">
          <h3 className="medium-text   text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
            {name}
          </h3>

          <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D] ">
            {city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
