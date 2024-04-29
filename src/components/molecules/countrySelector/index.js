import clsx from 'clsx'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const CountrySelector = ({isFocused}) => {
  return (
    <div
    id="show-country"
    className={clsx(
      'flex cursor-pointer items-center gap-1 px-[14px] text-[#555a61] medium-text',
      {
        'py-[7px]': isFocused,
        'py-2': !isFocused,
      }
    )}
  >
    IN <BsChevronDown />
  </div>
  )
}

export default CountrySelector





