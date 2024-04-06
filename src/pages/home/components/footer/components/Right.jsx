import React from "react";

const Right = () => {
  const listData = ["Learn More","About Altcase", "Careers", "Contact Us", "Privacy Policy", "Terms & Conditions"]
  const socailIcon = [
    {
      title: "facebook",
      icon: "/images/bxl-facebook.svg"
    },
    {
      title: "instagram",
      icon: "/images/instagram-logo.svg"
    },
    {
      title: "twitter",
      icon: "/images/bxl-twitter.svg"
    },
    {
      title: "youtube",
      icon: "/images/youtube-logo.svg"
    },
  ]
  return (
    <div className="w-full  text-white flex flex-col-reverse  gap-6 lg:gap-11">
      <p className="font-normal text-sm leading-6 tracking-[-0.2] text-right opacity-75">© 2024 Altcase. All Rights Reserved</p>
      <main className="flex justify-between items-center  p-8  py-0 gap-8 rounded-2xl bg-opacity-[5%]">
        <div id="left">
          <ul className=" font-normal leading-6 text-[#E9EFF6] tracking-[-0.2] flex flex-col gap-3">
            {
              listData?.map((li, index) => {
                return <li key={index} className={` cursor-pointer text-start whitespace-nowrap ${index === 0 ? "opacity-100 font-bold text-[16px]" : "opacity-80 font-normal text-sm"}  leading-7 tracking-[-0.3]`}>{li}</li>
              })
            }

          </ul>
        </div>
        <div id="right " className=" self-start w-[146px] flex flex-col gap-5">
          <h3 className="font-bold text-[16px] leading-7 tracking-[-0.3]">Social</h3>
          <div id="socialIcon" className="flex items-center justify-between">
            {
              socailIcon?.map((icon , index) => {
                return <img key={index} src={icon.icon} alt={icon.title} />
              })
            }
          </div>
        </div>
      </main>
    </div>
  );
};

export default Right;
