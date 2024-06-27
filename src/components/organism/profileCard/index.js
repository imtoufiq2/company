import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";

const ProfileCard = ({ name, city, comment, user_logo, color_code }) => {
  return (
    <div className="flex min-w-[272px] flex-col justify-between rounded-xl bg-[#FFF9DF] md:min-w-[19rem]" >

      <TextDisplay
        id="top"
        text={`“${comment}”`}
        elementType="p"
        className="regular-text whitespace-normal p-5 text-sm  leading-6 tracking-[-0.2] text-[#1B1B1B] md:text-base md:leading-7 md:tracking-[-0.3] "
      />
      <div
        id="bottomBox"
        className="flex min-h-[76px] gap-3  rounded-b-xl bg-[#FFF2C4] p-5"
      >
        <div id="leftAvatar" className="h-9 w-9">
          <Image src="/images/avatar image.svg" alt="avatar images" />
        </div>

        <div id="rightContent" className="tracking-[-0.2]">
          <h3 className="medium-text   text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
            {name}
          </h3>

          <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D] ">
            {city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
