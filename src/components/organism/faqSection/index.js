import { Accordion } from "@szhsin/react-accordion";
import { accordianData } from "../../../constants/staticData";
import AccordionItem from "../../molecules/accordionItem";

const FaqSection = () => {
  return (
    <div className=" my-4  w-[90%] md:w-[75%] mx-auto flex flex-col gap-4 max-w-[1008px] ">
    <h2 className="font-bold  text-xl leading-8  tracking-[-0.3] text-[#1B1B1B] md:font-medium md:text-4xl md:leading-[44px] md:tracking-[-0.1]">
      Frequently Asked{" "}
      <span className="text-custom-green block sm:inline-block md:font-bold">
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
            key={index}
            header={data.title}
            initialEntered={data.isActive}
            completeData={data}
          >
            {data.content.map((curData, index) => {
              return (
                <p
                  key={index}
                  className="font-normal leading-5 md:leading-6 text-[12px] md:text-sm tracking-[-0.2] text-[#1B1B1B] flex mt-2 opacity-85"
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
  )
}

export default FaqSection
