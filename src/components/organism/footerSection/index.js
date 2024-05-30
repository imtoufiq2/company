import LeftSection from "../section/Left";
import TextDisplay from "../../atoms/textContent/TextContent";
import Image from "../../atoms/Image";
import Heading from "../../atoms/headingContent/Heading";
import ListItem from "../../atoms/listItem/ListItem";
import RightSection from "../section/Right";
import AppDownloadCard from "../appDownloadCard";
import { socailIcon } from "../../../constants/staticData";
import { listData } from "../../../constants/staticData"; 
import { twMerge } from "tailwind-merge";

const FooterSection = ({className}) => {
  const classes = twMerge(
    `w-full h-12 flex justify-center items-center font-medium text-lg leading-[30px] tracking-[-0.3] rounded-md transition duration-200 ease-in-out active:scale-[0.99]`,
    className
 );
  return (
    <footer className={`mt-5 bg-[#15362B] py-20 md:mt-10 ${className} hidden md:block`}>
      <div className=" mx-auto  flex w-[90%] max-w-[1008px] flex-col justify-between    gap-5 md:w-[75%] md:gap-8 lg:flex-row lg:gap-16">
        <LeftSection className="gap-11s flex w-full flex-col justify-between text-white">
          <Image
            src="/images/logo-icon-dark.svg"
            className="h-full max-h-[24px] w-full max-w-[139px]"
            alt="logo-icon"
          />
          <AppDownloadCard />
        </LeftSection>
        <RightSection className="flex  w-full flex-col-reverse gap-6    text-white md:flex-col lg:gap-11">
          <TextDisplay
            id="example"
            text="© 2024 Altcase. All Rights Reserved"
            elementType="p"
            className="w-full overflow-auto whitespace-normal text-right text-sm font-normal leading-6 tracking-[-0.2] text-white opacity-75 regular-text"
          />
          <main className="flex items-center justify-between  gap-8  rounded-2xl bg-opacity-[5%] p-8 py-0">
            <div>
              <ul className=" flex flex-col gap-3 font-normal leading-6 tracking-[-0.2] text-[#E9EFF6]">
                {listData?.map((li, index) => (
                  <ListItem
                    key={index}
                    content={li}
                    isHighlighted={index === 0}
                  />
                ))}
              </ul>
            </div>
            <div className=" flex w-[146px] flex-col gap-5 self-start">
              <Heading
                text="Social"
                type="h3"
                className="bold-text text-[16px] leading-7 tracking-[-0.3] "
              />
              <div
                id="socialIcon"
                className="flex items-center justify-between"
              >
                {socailIcon?.map((icon, index) => {
                  return (
                    <Image
                      key={index}
                      src={icon.icon}
                      alt={icon.title}
                      className="cursor-pointer transition-all duration-200 ease-in-out active:scale-[0.97]"
                    />
                  );
                })}
              </div>
            </div>
          </main>
        </RightSection>
      </div>
    </footer>
  );
};

export default FooterSection;
