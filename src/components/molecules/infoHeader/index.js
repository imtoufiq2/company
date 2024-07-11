
const InfoHeader  = ({ title, description }) => {
  return (
    <div id="_header" className='flex flex-col gap-2'>
    <h3 className="bold-text text-xl leading-8 tracking-[-0.3px]">
   {title}
    </h3>
    <p className="regular-text text-sm leading-6 tracking-[-0.2px] text-[#5E718D]">
    {description}
    </p>
  </div>
  )
}

export default InfoHeader 