import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "@szhsin/react-accordion";
import { accordianData } from "../../../constants/staticData";
import AccordionItem from "../../molecules/accordionItem";
import { twMerge } from "tailwind-merge";
import { useCallback, useEffect } from "react";
import { fetchWithWait } from "../../../utils/method";
import { getData } from "../../../utils/Crypto";
import { fetchFaq } from "../../../redux/actions/dashboard";
import { useParams } from "react-router-dom";

const FaqSection = ({ className, profile }) => {
  const dispatch = useDispatch();
  const { id: fdid } = useParams();
  const classes = twMerge(
    `mx-auto  flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%]`,
    className,
  );
  const { faqData, faqDataError } = useSelector(
    (state) => state?.dashBoardPage,
  );
 //get the faq
 const handleGetFaq = useCallback(() => {
  // const data = {
  //   investor_id: Number(getData("userData")?.investor_id) ?? 0,
  //   fd_id: sessionStorage.getItem("fdid") ? Number(sessionStorage.getItem("fdid")): fdid ? Number(fdid) : 0,
  // };
  const data = {
    investor_id: Number(getData("userData")?.investor_id ?? 0),
    fd_id: sessionStorage.getItem("fdid") ? Number(sessionStorage.getItem("fdid")) : (fdid ? Number(fdid) : 0),
  };
  
  fetchWithWait({ dispatch, action: fetchFaq(data) });
}, [dispatch, fdid]);

useEffect(() => {
  handleGetFaq();
}, [handleGetFaq]);
  return (
    <div className={`${classes} flex flex-col gap-5 md:gap-10`}>
      <h2
        className={`  bold-text  leading-8   tracking-[-0.3px]  ${profile ? "text-xl text-[#21B546]" : "text-xl text-[#1B1B1B]"} md:hidden`}
      >
        Frequently Asked{" "}
        <span
          className={`${profile ? "inline-block" : "block"}  text-custom-green sm:inline-block `}
        >
          Questions
        </span>
      </h2>
      <h2
        className={` medium-text md:medium-text  leading-8   tracking-[-0.3px] md:leading-[44px] md:tracking-[-1px] ${profile ? "text-xl text-[#21B546]" : "text-xl text-[#1B1B1B] md:text-4xl"} hidden md:block`}
      >
        Frequently Asked{" "}
        <span
          className={`${profile ? "inline-block" : "block"}  bold-text  text-custom-green sm:inline-block `}
        >
          Questions
        </span>
      </h2>

      <Accordion
        transition
        transitionTimeout={200}
        className="flex flex-col gap-7"
        style={{ border: "none", boxShadow: "none" }}
      >
        {faqData?.length && !faqDataError > 0
          ? faqData.map((data, index) => (
              <AccordionItem
                profile={profile}
                key={index}
                header={data.faq}
                initialEntered={profile ? false : data.isActive}
                completeData={data?.answer}
              >
                <p
                  key={index}
                  className="regular-text flex text-xs leading-5 tracking-[-0.2px] text-[#1B1B1B] opacity-85 md:text-sm md:leading-6"
                >
                  {data?.answer}
                </p>
              </AccordionItem>
            ))
          : accordianData.map((data, index) => (
              <AccordionItem
                profile={profile}
                key={index}
                header={data.title}
                initialEntered={profile ? false : data.isActive}
                completeData={data}
              >
                {data.content.map((curData, idx) => (
                  <p
                    key={idx}
                    className="regular-text flex text-xs leading-5 tracking-[-0.2px] text-[#1B1B1B] opacity-85 md:text-sm md:leading-6"
                  >
                    {curData}
                  </p>
                ))}
              </AccordionItem>
            ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
