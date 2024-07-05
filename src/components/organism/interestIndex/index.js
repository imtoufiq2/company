import { useSelector } from "react-redux";
import InvestmentCard from "../investmentCard";
import { useRef, useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import EmptyState from "../emptyState";
const InterestIndex = () => {
  const { error, showCaseData } = useSelector((state) => state?.dashBoardPage);
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -260*4, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 260*4, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      handleScroll(); // Initial check
      currentContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="mx-auto flex w-[90%] max-w-[1008px] flex-col gap-5 md:w-[75%] md:gap-10">
      <div id="top" className="">
        <h2 className="bold-text md:medium-text max-h-[60px] text-xl leading-8 tracking-[-0.3] text-[#1B1B1B] md:hidden md:text-4xl md:leading-[44px] md:tracking-[-1]">
          High rate FDs,{" "}
          <span className="block text-custom-green sm:inline-block">
            from reputed institutions
          </span>
        </h2>

        <h2 className="medium-text hidden text-xl leading-8 tracking-[-0.3] text-[#1B1B1B] md:block md:text-4xl md:leading-[44px] md:tracking-[-1]">
          High rate FDs,{" "}
          <span className="bold-text block text-custom-green sm:inline-block">
            from reputed institutions
          </span>
        </h2>
      </div>
      {!error && showCaseData?.length > 0 ? (
        <div className="relative">
          {showCaseData?.length > 4 && (
            <span
              className={`text-red-950d- absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-2/4 -translate-y-1/2 transform  items-center justify-center rounded-full border-[0.5px] border-[#D7DFE9]  p-2 lg:flex  ${
                isAtStart
                  ? " bg-[#F9FAFB] text-[#D7DFE9] opacity-50"
                  : "cursor-pointer bg-[#F2FFF5] text-[#5E718D]"
              }`}
              onClick={scrollLeft}
              disabled={isAtStart}
            >
              <HiChevronLeft />
            </span>
          )}

          <div
            id="bottom"
            ref={containerRef}
            className="example grid grid-cols-2 gap-3 overscroll-contain pt-1 lg:flex lg:gap-4 lg:overflow-x-scroll"
          >
            {showCaseData?.map((curBank, index) => {
              return <InvestmentCard key={index} curBank={curBank} />;
            })}
          </div>
          {showCaseData?.length > 4 && (
            <span
              className={`absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-2/4 transform  items-center justify-center rounded-full p-2 text-[#5E718D] lg:flex  ${
                isAtEnd
                  ? " bg-[#F9FAFB] text-[#D7DFE9] opacity-50"
                  : "cursor-pointer bg-[#F2FFF5] text-[#5E718D]"
              }`}
              onClick={scrollRight}
              disabled={isAtEnd}
            >
              <HiChevronRight />
            </span>
          )}
        </div>
      ) : (
        <EmptyState/>
      )}
    </div>
  );
};

export default InterestIndex;
