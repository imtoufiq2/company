import { useNavigate } from 'react-router-dom'
import React, { useCallback, useEffect, useState } from 'react'

import Image from '../../atoms/Image'
import Heading from '../../atoms/headingContent/Heading'
import InvestSectionHeaderWithIcon from '../../molecules/InvestSectionHeaderWithIcon'

import { formatIndianNumber } from '../../../utils/commonUtils'
import useBackgroundColor from '../../../customHooks/useBackgroundColor'
import LeftArrow from '../../../Icons/LeftArrow'
import useScrollToTop from '../../../customHooks/useScrollToTop'


const ShowFdFinder = () => {
    const navigate=useNavigate()
    useBackgroundColor();
    const [order, setOrder] = useState("asc");
    const [data , setData]=useState(null)
    useScrollToTop()

   
    
    const handleSort = useCallback(() => {
      const sortedData = [...data].sort((a, b) => {
        const min_daysA = parseFloat(a.min_days);
        const min_daysB = parseFloat(b.min_days);
    
        return order === "asc" ? min_daysA - min_daysB : min_daysB - min_daysA;
      });
    
      setData(sortedData);
      setOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
    }, [data, order]);
    
    useEffect(() => {
      const fdFinderSuggestion = sessionStorage.getItem("fdFinderSuggestion");
      if (fdFinderSuggestion) {
        setData(JSON.parse(fdFinderSuggestion));
      }
    }, []); 
 
  return (
    <>
    <div className=" mx-auto  mt-0 flex max-w-[1008px] flex-col  justify-between gap-2 px-5 pt-6 md:gap-5 lg:mt-8 lg:px-0 lg:pt-0">
    <span className="mb-3 md:hidden">
          <LeftArrow width="20" height="20" onClickFun={() => navigate(-1)} />
        </span>
      <Heading
        text="We’ve found FDs matching to your requirements"
        type="h3"
        className="bold-text text-2xl leading-8 tracking-[-0.5px]  text-[#1B1B1B]"
      />
     
    </div>
    <div className="md:pt8 mx-auto flex w-full max-w-[1010px] flex-col items-center justify-center gap-10 pb-10 pt-5 md:pb-20">
    <div
          id="_body-data"
          className="flex w-full max-w-[1010px] flex-col px-5 lg:px-0"
        >
         <div className='flex items-center justify-between'>
         <InvestSectionHeaderWithIcon
            headerText={`${data?.length} Schemes Found`}
          />
        {/* {fdData?.length > 0 && ( */}
                <button
                  onClick={() => handleSort("asc")}
                  className="flex h-[38px] min-w-[38px] cursor-pointer items-center justify-center gap-1 rounded-md border px-1 transition-all duration-200 ease-in-out active:scale-[0.97]  md:h-[42px] md:min-w-[42px] md:px-2"
                >
                  <img src="/images/ArrowsDownUp.svg" alt="ArrowsDownUp" />
                  <span className="medium-text text-sm md:text-base text-[#455468]">
                    Tenure
                  </span>
                </button>
              {/* )} */}
         </div>
          <div
            id="_body-data"
            className="mt-5 grid grid-cols-1 gap-3 md:mt-8 md:grid-cols-2 md:gap-8"
          >
            {data?.map((cur, index) => (
              <div
                key={index}
                className="flex  flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 bg-white"
                // onClick={() => {
                //   if (cur?.fd_id && cur?.scheme_master_id) {
                //     // navigate(
                //     //   `/invest/${cur?.fd_id}/${cur?.scheme_master_id}/${cur?.tag}`,
                //     // );
                //   }
                // }}
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <Image
                    src={cur?.logo_url}
                    alt="target icon"
                    className="h-[24px] w-[24px] object-contain md:h-10 md:w-10"
                  />
                  <span className="bold-text text-base leading-7 tracking-[-0.3px] md:text-xl md:leading-8">
                    {cur?.issuer_name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start gap-2">
                    <p className="regular-text text-[12px] leading-5 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-7">
                      Interest Rate
                    </p>
                    <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#21B546] md:text-lg md:leading-[30px]">
                      {`${cur?.rate_of_interest_regular ?? "N/A"}% p.a`}
                    </h6>
                  </div>
                  <div className="flex flex-col gap-2 md:min-h-[66px] md:justify-between">
                    <p className="regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
                      Tenure
                    </p>
                    <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
                      {/* {cur?.min_days} */}
                      {(cur?.min_days / 360).toFixed(1)} year

                    </h6>
                  </div>
                  <div className="flex flex-col items-end gap-2 md:min-h-[66px] md:justify-between">
                    <p className="regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
                      Interest on 1 Lac
                    </p>
                    <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
                    {cur?.interest_amount ? `₹${formatIndianNumber(cur.interest_amount)}` : '₹0'}
                    </h6>
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
    </div>
  </>
  )
}

export default ShowFdFinder