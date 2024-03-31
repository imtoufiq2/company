import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import ChevronIcon from "../../../Icons/Chevron-down";

const accordianData = [
  {
    title: "When can I withdraw my funds?",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    isActive: true,
  },
  {
    title: "How safe will be my money while investing with Altcase?",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    isActive: false,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur sedo adipiscing?",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    isActive: false,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur sedo adipiscing?",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    isActive: false,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur sedo adipiscing?",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    isActive: false,
  },
];
const AccordionItem = ({ header, completeData, ...rest }) => {
  return (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <div
          className={` text-sm tracking-[-0.2] leading-6 font-medium flex justify-between w-full items-start 
          mb-2  md:leading-7  md:text-[16px] md:tracking-[-0.3]`}
        >
          {header}

          <ChevronIcon
            color={isEnter ? "#21B546" : "inherit"}
            isRotated={isEnter}
          />
        </div>
      )}
      className=" gap-2"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full  text-left hover:bg-slate-100 ${
            !isEnter ? "text-[#3D4A5C] font-semibold" : "text-[#1B1B1B]"
          }`,
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out",
      }}
      panelProps={{ className: "p-0" }}
    />
  );
};

export default function FAQ() {
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
  );
}
