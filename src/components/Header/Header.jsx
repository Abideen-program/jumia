import React from "react";
import Banner from "./Banner";
import { MdSearch } from "react-icons/md";

function Header() {
  return (
    <>
      <Banner />
      <div className="bg-white px-[60px] gap-24 py-5 flex items-center">
        <div className="h-[50px]">
          <img className="h-full" src="/images/jumia-logo.png" alt="jumia" />
        </div>
        <div className="flex-1 flex item-center justify-center gap-3">
          <div className="flex-1 flex item-center justify-center gap-3">
            <div className="flex items-center border border-[#A3A3A6] rounded-md w-full p-[10px]">
              <MdSearch className="text-2xl mr-[10px] text-[#A3A3A6] font-bold" />
              <input
                className="flex-1 border border-none focus:outline-0"
                type="text"
                placeholder="Search products, brands and categories"
              />
            </div>
            <button className="bg-[#FF9900] rounded-md text-white px-3 py-2">
              SEARCH
            </button>
          </div>

          <div className="flex items-center border-2 border-stone-950">
            <MdSearch />
            <input className="" type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
