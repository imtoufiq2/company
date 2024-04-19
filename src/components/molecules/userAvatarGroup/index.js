import Image from "../../atoms/Image";

const imageSrc =
"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg";

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
        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#F0F7F2] text-center text-[8px] text-xs font-semibold tracking-[-0.2] text-[#444D61] hover:bg-gray-100 md:h-[30px] md:w-[30px] dark:border-[#fff]"
        href="/"
      >
        12k+
      </p>
    </div>
  )
}

export default UserAvatarGroup
