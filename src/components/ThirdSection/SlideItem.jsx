import React from "react";

const SlideItem = ({ title, image, price, percent }) => {
  const realPrice = Math.ceil(price / ((100 - percent) / 100));
  return (
    <div className="cursor-pointer bg-white flex flex-col hover:shadow-md hover:scale-[1.01] h-[120px] w-[100px] md:w-[165px] md:h-[230px] focus:outline-0 rounded-md p-1 lg:p-0">
      <div className="h-[full] w-full relative">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt="product"
        />
        <p className="absolute text-xs right-1 top-1 text-[#FF9900] bg-[#FEF3E9] p-1">
          -{percent}%
        </p>
      </div>
      <div className="px-1">
        <p className="text-xs">{title}</p>
        <p className="text-sm font-[500] mt-1">₦{price}</p>
        <p className="text-xs line-through">₦{realPrice}</p>
      </div>
    </div>
  );
};

export default SlideItem;
