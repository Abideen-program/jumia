import React from "react";

function Input() {
  return (
    <div className="relative group border border-[#A3A3A6] hover:border-[#ff9900] hover:outline hover:outline-offset-1 hover:outline-1 hover:outline-[#ff9900] rounded-md text-[#A3A3A3]">
      <label htmlFor="fname" className="group-hover:text-[#ff9900] absolute -top-[10px] left-6 text-xs font-normal bg-white text-[#A3A3A6]">First Name</label>
      <input id='fname' type="text" placeholder="Enter your First Name"  className="w-full p-4 outline-none font-normal text-[#A3A3A6]"/>
    </div>
  );
}

export default Input;
