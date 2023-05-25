import React from "react";

const Delivery = () => {
  return (
    <div className="w-[220px] h-max  rounded-md hidden lg:flex flex-col gap-3">
      <div className="h-[50%] w-full">
        <img
          className="w-full h-full object-contain rounded-md"
          src="/images/delivery.png"
          alt=""
        />
      </div>

      <div className="h-[50%] w-full">
        <img
          className="w-full h-full object-contain rounded-md"
          src="/images/JForce.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Delivery;
