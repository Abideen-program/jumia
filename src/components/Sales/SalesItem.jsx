import React from "react";

const SalesItem = ({image, title}) => {
  return (
    <div
      className={`cursor-pointer flex flex-col items-center justify-center hover:shadow-xl hover:scale-[1.01] w-[180px] h-[200px] focus:outline-0 rounded-md p-1 lg:p-0`}
    >
      <div className="h-full w-full relative">
        <img
          className="w-full h-full rounded-md"
          src={image}
          alt="product"
        />
      </div>
      <p className="text-[11px] md:text-xs my-2">{title}</p>
    </div>
  );
};

export default SalesItem;
