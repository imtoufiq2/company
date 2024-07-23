import Image from '../../atoms/Image'

const BankLogo  = ({imageUrl, divClassName, imageClassName, altText}) => {
  return (
    <div
    className={`flex   items-center justify-center  rounded-full border  bg-white  ${divClassName ? divClassName :" h-[50px]  w-[50px] lg:h-[60px] lg:w-[60px]"}`}
  > 
    <Image
      src={imageUrl? imageUrl : "/images/SBI-logo.svg"}
      alt={altText? altText : "bank logo"}
      className={` ${imageClassName ? imageClassName : "h-[30px] w-[30px] lg:h-[36px] lg:w-[36px]"}`}
    />
  </div>
  )
}

export default BankLogo 