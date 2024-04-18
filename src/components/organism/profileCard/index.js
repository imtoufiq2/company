import Image from "../../atoms/Image"
import TextDisplay from "../../atoms/textContent/TextContent"
import Heading from "../../atoms/headingContent/Heading"

const ProfileCard = () => {
  return (
    <div className="min-w-[272px] min-h-[240px] bg-[#FFF9DF] rounded-xl flex flex-col justify-between">
      
    <TextDisplay id="top" text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.”" elementType="p"   className="font-normal text-sm md:text-[16px] tracking-[-0.2] md:tracking-[-0.3] leading-6 md:leading-7 text-[#1B1B1B] p-5 whitespace-normal"/>
    <div
      id="bottomBox"
      className="min-h-[76px] bg-[#FFF2C4] rounded-xl flex p-5 gap-3"
    >
      <div id="leftAvatar" className="w-9 h-9">
     
        <Image src="/images/avatar image.svg" alt="avatar images" />
      </div>

      <div id="rightContent" className="tracking-[-0.2]">
        <h3 className="text-sm font-medium  leading-6 text-[#1B1B1B]">
          Saurabh Awasthi
        </h3>
        {/* <Heading text=" Saurabh Awasthi" type = 'h3' className="text-sm font-medium  leading-6 text-[#1B1B1B]"/> */}
        <p className="font-normal text-[#5E718D] text-[12px] leading-5 tracking-[-0.2]">
          Mumbai
        </p>
      </div>
    </div>
  </div>
  )
}

export default ProfileCard
