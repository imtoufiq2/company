import React from 'react'
import ChevronIcon from '../../../Icons/Chevron-down';
import {  AccordionItem as Item } from "@szhsin/react-accordion";
const AccordionItem = ({ header, completeData, ...rest }) => {
    return (
      <Item
        {...rest}
        header={({ state: { isEnter } }) => (
          <div
            className={`${
              !isEnter ? "medium-text" : "bold-text"
            } text-sm tracking-[-0.2] leading-6  flex justify-between w-full items-start 
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
              !isEnter ? "text-[#3D4A5C] semi-bold-text" : "text-[#1B1B1B]"
            }`,
        }}
        contentProps={{
          className: "transition-height duration-200 ease-out",
        }}
        panelProps={{ className: "p-0" }}
      />
    );
  };

export default AccordionItem
