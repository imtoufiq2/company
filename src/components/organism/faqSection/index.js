import { Accordion } from "@szhsin/react-accordion";
import { accordianData } from "../../../constants/staticData";
import AccordionItem from "../../molecules/accordionItem";
import { twMerge } from "tailwind-merge";

const FaqSection = ({ className, profile }) => {
  const classes = twMerge(
    `mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%]`,
    className,
  );
  return (
    <div className={classes}>
      <h2
        className={`  bold-text md:medium-text md:medium-text  leading-8   tracking-[-0.3] md:leading-[44px] md:tracking-[-1] ${profile ? "text-xl text-[#21B546]" : "text-xl text-[#1B1B1B] md:text-4xl"}`}
      >
        Frequently Asked{" "}
        <span
          className={`${profile ? "inline-block" : "block"}  md:bold-text text-custom-green sm:inline-block `}
        >
          Questions
        </span>
      </h2>

      <Accordion
        transition
        transitionTimeout={200}
        className="flex flex-col gap-4 "
        style={{ border: "none", boxShadow: "none" }}
      >
        {accordianData.map((data, index) => {
          return (
            <AccordionItem
              profile={profile}
              key={index}
              header={data.title}
              initialEntered={profile ? false : data.isActive}
              completeData={data}
            >
              {data.content.map((curData, index) => {
                return (
                  <p
                    key={index}
                    className="regular-text mt-2 flex text-xs leading-5 tracking-[-0.2] text-[#1B1B1B] opacity-85 md:text-sm md:leading-6"
                  >
                    {curData}
                  </p>
                );
              })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqSection;
