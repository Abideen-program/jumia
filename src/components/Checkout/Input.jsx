import { clx } from "../utils/clx";

import { useState } from "react";

const Input = ({ id, errorMessage, label, className, ...props }) => {
  const divClass = clx(
    "relative group border border-[#A3A3A6] hover:border-[#ff9900] hover:outline hover:outline-offset-1 hover:outline-1 hover:outline-[#ff9900] rounded-md text-[#A3A3A3] my-4 w-full",
    className
  );

  const labelClass = clx(
    `group-hover:text-[#ff9900] absolute -top-[10px] left-6 text-xs font-normal bg-white ${errorMessage ? 'text-red-600 group-hover:text-red-600' : ''}`
  );

  const inputClass = clx(
    "w-full p-3 md:p-4 outline-none font-normal text-black"
  );
  return (
    <>
      <div className={divClass}>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <input className={inputClass} id={id} {...props} />
        <p className="text-xs text-red-600 absolute -bottom-5">
          {errorMessage}
        </p>
      </div>
    </>
  );
};

export default Input;
