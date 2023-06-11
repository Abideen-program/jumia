import { clx } from "../utils/clx";

import { useState } from "react";

const divClass = clx(
  "relative group border border-[#A3A3A6] hover:border-[#ff9900] hover:outline hover:outline-offset-1 hover:outline-1 hover:outline-[#ff9900] rounded-md text-[#A3A3A3] my-4 w-full"
);

const labelClass = clx(
  "group-hover:text-[#ff9900] absolute -top-[10px] left-6 text-xs font-normal bg-white text-[#A3A3A6]"
);

const inputClass = clx("w-full p-4 outline-none font-normal text-black");

const Input = ({ id, label, ...props }) => {
  return (
    <div className={divClass}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input className={inputClass} id={id} {...props} />
    </div>
  );
};

export default Input;
