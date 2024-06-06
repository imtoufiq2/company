import React from "react";
import Image from "../../atoms/Image";

const PopularFixedBankHeader = ({curVal}) => {
  
  return (
    <div className="flex gap-2 md:gap-4">
      <Image
          src={curVal?.logo_url}
          alt="target icon"
          className="h-[24px]
          w-[24px] md:h-10 md:w-10 object-contain
          
          "
        />
      <span className="bold-text text-base leading-7 tracking-[-0.3] md:text-xl md:leading-8">{curVal?.fd_name}</span>

    </div>
  );
};

export default PopularFixedBankHeader;



// import React from "react";
// import Image from "../../atoms/Image";

// const PopularFixedBankHeader = ({ curVal }) => {
//   return (
//     <div className="flex gap-2 md:gap-4">
//       <Image
//         // src="/images/Shriram-finance-icon.svg"
//         src={curVal?.logo_url && curVal.logo_url}
//         alt="target icon"
//         className="h-[24px] w-[24px]
//           object-contain md:h-10 md:w-10
          
//           "
//       />
//       <span className="bold-text text-base leading-7 tracking-[-0.3] md:text-xl md:leading-8">
//         {curVal?.issuer_name && curVal.issuer_name}
//       </span>
//     </div>
//   );
// };

// export default PopularFixedBankHeader;
