import React from 'react'
import ScanCard from './ScanCard'

const Left = () => {
  return (
    <div className='w-full text-white flex flex-col justify-between gap-11'>
      <img src="/images/logo-icon-dark.svg" className='max-w-[139px] w-full max-h-[24px] h-full' alt="logo-icon" />
      <ScanCard/>
    </div>
  )
}

export default Left