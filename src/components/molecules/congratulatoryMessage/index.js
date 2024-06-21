import React from 'react';
import Image from '../../atoms/Image';

const CongratulatoryMessage = ({ title, message, imageUrl, imageAlt }) => {
  return (
    <div className="flex items-center gap-3">
      <Image src={imageUrl ? imageUrl : "/images/success-green.svg"} alt= {imageAlt ? imageAlt : "success"} />

      <div className="flex flex-col gap-2">
        <h3 className="bold-text text-2xl leading-6 tracking-[-0.5] text-[#1B1B1B]">
         {title ? title : "Congratulations!"} 
        </h3>
        <p className="regular-text text-base leading-5 tracking-[-0.3] text-[#5E718D]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default CongratulatoryMessage;
