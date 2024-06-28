import Image from "../../atoms/Image";

const imageSrc =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzV2na8k-KjVsMWLPeWbsQE4BdhU7NbWJFNg&s";

const UserAvatarGroup = () => {
  const images = [
    {
      src: "/avatarwarp1.png",
    },
    {
      src: "/avatarwarp2.png",
    },
    {
      src: "/avatarwrap3.png",
    },
    {
      src: "/avatarwrap3.png",
    },
    {
      src: "/avatarwrap3.png",
    },
  ];
  return (
    <div className="flex -space-x-2 rtl:space-x-reverse">
      {images.map((curItem, index) => {
        return (
          <Image
            key={index}
            className="h-6 w-6 rounded-full border-2 border-white object-cover md:h-[30px] md:w-[30px] dark:border-[#fff]"
            // src={imageSrc}
            src={`/images/${curItem?.src}`}
            alt="avatar"
          />
        );
      })}

      <p
        className="semi-bold-text flex h-6 w-6 items-center justify-center  rounded-full border-2 border-white bg-[#F0F7F2] text-center  text-xs leading-[8px] tracking-[-0.2] text-[#444D61] hover:bg-gray-100 md:h-[30px] md:w-[30px] dark:border-[#fff]"
        href="/"
      >
        <span className="text-[0.5rem]">12k+</span>
      </p>
    </div>
  );
};

export default UserAvatarGroup;
