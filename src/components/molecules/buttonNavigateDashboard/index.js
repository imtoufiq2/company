import { useNavigate } from 'react-router-dom'
import Image from '../../atoms/Image'
import Button from '../../atoms/button/Button'

const ButtonNavigateDashboard = () => {
    const navigate=useNavigate()
  return (
    <div
        id="_third"
        className="mx-auto flex cursor-pointer items-baseline gap-2"
        onClick={() => navigate("/")}
      >
        <Image src="/images/home-icon.svg" alt="home" />
        <Button
          onClick={() => {}}
          label="Go to Dashboard"
          className={`medium-text medium-text   text-[#21B546]" mx-auto    h-fit w-fit  text-[16px] text-lg leading-normal tracking-[-0.2px] text-[#21B546] duration-300`}
        />
      </div>
  )
}

export default ButtonNavigateDashboard