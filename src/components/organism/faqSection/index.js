import { Accordion } from "@szhsin/react-accordion";
import { accordianData } from "../../../constants/staticData";
import AccordionItem from "../../molecules/accordionItem";

const FaqSection = () => {
  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%] ">
      <h2 className="text-xl  font-bold leading-8  tracking-[-0.3] text-[#1B1B1B] md:text-4xl md:font-medium md:leading-[44px] md:tracking-[-0.1]">
        Frequently Asked{" "}
        <span className="block text-custom-green sm:inline-block md:font-bold">
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
                    className="mt-2 flex text-[12px] font-normal leading-5 tracking-[-0.2] text-[#1B1B1B] opacity-85 md:text-sm md:leading-6"
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
