import Image from "../../atoms/Image";

const imageSrc =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzV2na8k-KjVsMWLPeWbsQE4BdhU7NbWJFNg&s";

const UserAvatarGroup = () => {
  return (
    <div className="flex -space-x-2 rtl:space-x-reverse">
      {Array.from({ length: 5 }).map((curItem, index) => {
        return (
          <Image
            key={index}
            className="h-6 w-6 rounded-full border-2 border-white object-cover md:h-[30px] md:w-[30px] dark:border-[#fff]"
            src={imageSrc}
            alt="avatar"
          />
        );
      })}

      <p
        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#F0F7F2] text-center text-[0.5rem] text-xs semi-bold-text leading-[8px] tracking-[-0.2] text-[#444D61] hover:bg-gray-100 md:h-[30px] md:w-[30px] dark:border-[#fff]"
        href="/"
      >
        12k+
      </p>
    </div>
  )
}

export default UserAvatarGroup
