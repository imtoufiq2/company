import { formatNumber } from "../../../utils/commonUtils";
import Image from "../../atoms/Image";



const UserAvatarGroup = ({totolUser}) => {

  const images = [
    {
      src: "/images/ww1.png",
    },
    {
      src: "/images/ww2.png",
    },
    {
      src: "/images/ww3.png",
    },
    {
      src: "/images/ww4.png",
    },
    {
      src: "/images/ww5.png",
    },
  ];
  return (
    <div className="flex -space-x-2 rtl:space-x-reverse">
      {images.map((curItem, index) => {
        return (
          <Image
            key={index}
            className="h-6 w-6 rounded-full border-2 border-white object-fill md:h-[30px] md:w-[30px] dark:border-[#fff]"
            // src={imageSrc}
            src={curItem?.src}
            alt="avatar"
          />
        );
      })}

      <p
        className="semi-bold-text flex h-6 w-6 items-center justify-center  rounded-full border-2 border-white bg-[#F0F7F2] text-center  text-xs leading-[8px] tracking-[-0.2px] text-[#444D61] hover:bg-gray-100 md:h-[30px] md:w-[30px] dark:border-[#fff]"
        href="/"
      >
        <span className="text-[0.5rem]">{formatNumber(Number(totolUser))} +</span>
      </p>
    </div>
  );
};

export default UserAvatarGroup;
