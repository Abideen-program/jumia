import React from "react";
import { FaCheckCircle, FaAngleRight } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";

const AddressFilled = () => {
  const details = useSelector((state) => state.details.customerDetails);
  //   console.log([details]);

  const allDetails = [details];
  console.log([...allDetails]);
  return (
    <div>
      <div className="bg-white flex flex-col rounded-sm">
        <div className="flex items-center justify-between px-4 py-3 gap-2 border-b">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[green]" />
            <p className="text-[13px] font-medium">1. DELIVERY ADDRESS</p>
          </div>
          <div className="text-[13px] flex gap-1 items-center text-[#264996] hover:underline cursor-pointer">
            <p>Change</p>
            <FaAngleRight className="text-base" />
          </div>
        </div>

        <div className="p-6 ">
          <p className="text-sm">
            {details.firstName} {details.lastName}
          </p>
          <p className="text-[10px] mt-2">
            {details.address} | {details.state} - {details.LGA} |{" "}
            {details.number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressFilled;
