import React from "react";
import { HiOutlineUser, HiOutlineGift } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { clx } from "../utils/clx";
import { Link } from "react-router-dom";

const wrapperClass = clx(
  "absolute -bottom-52 right-44 bg-white w-[220px] rounded-md border border-stone-200"
);
const buttonClass = clx(
  "w-full bg-[#FF9900] rounded-md text-white px-3 py-2 hover:bg-[#E07E1B] shadow-md"
);
const pclasses = clx(
  "group flex items-center p-3 gap-3 hover:bg-[#f1f1f2] transition-all duration-[300]  cursor-pointer"
);
const spanClass = clx("text-[grey] text-sm group-hover:text-[black]");
const Account = () => {
  return (
    <div className={wrapperClass}>
      <Link to='signin'>
        <div className="py-4 mx-4">
          <button className={buttonClass}>SIGN IN</button>
        </div>
      </Link>

      <div className="border-t-2 border-[#f1f1f2] mt-2 ">
        <p className={pclasses}>
          <HiOutlineUser className="text-2xl" />
          <span className={spanClass}>My Account</span>
        </p>

        <p className={pclasses}>
          <HiOutlineGift className="text-2xl" />
          <span className={spanClass}>Orders</span>
        </p>

        <p className={pclasses}>
          <MdOutlineFavoriteBorder className="text-2xl" />
          <span className={spanClass}>Saved Items</span>
        </p>
      </div>
    </div>
  );
};

export default Account;
