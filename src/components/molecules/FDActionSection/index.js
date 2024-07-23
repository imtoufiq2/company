import React from 'react'
import ActionSection from '../../organism/actionSection'
import TextDisplay from '../../atoms/textContent/TextContent'
import Button from '../../atoms/button/Button'
import { useNavigate } from 'react-router-dom'

const FDActionSection  = () => {
  const navigate=useNavigate()
  return (
    <ActionSection className="flex items-center justify-between gap-3 bg-[#15362B] p-5 md:p-6 max-h-[5.25rem]">
    <TextDisplay
      id="left"
      className="flex items-center gap-1   text-sm bold-text leading-6 tracking-[-0.2px] text-white md:text-xl md:leading-8 md:tracking-[-0.3px] md:medium-text whitespace-normal"
      text="Not sure which FD to invest in?"
    />
    <Button
      label="Try FD Finder"
      onClick={()=>navigate("/fd-finder")}
      className="h-fit w-fit medium-text rounded-md  bg-[#21B546] px-3 py-[6px] md:text-base  text-sm leading-6 tracking-[-0.2px] transition-all duration-200 ease-in-out active:scale-[0.99] md:px-5 whitespace-nowrap md:py-[10px] md:leading-7 md:tracking-[-0.3px] lg:min-w-[145px]"
    />
  </ActionSection>
  )
}

export default FDActionSection 