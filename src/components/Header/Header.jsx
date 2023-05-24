import { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import Banner from "./Banner";
import Account from "./Account";
import Help from "./Help";

function Header() {
  const [acc, setAcc] = useState(false);
  const [help, setHelp] = useState(false);

  const showAcc = () => {
    setAcc(!acc);
    setHelp(false);
  };

  const showHelp = () => {
    setHelp(!help);
    setAcc(false);
  };

  return (
    <>
      <Banner />
      {/* DESKETOP NAVBAR */}
      <div className="bg-white hidden px-[50px] gap-16 py-5 lg:flex items-center relative">
        <Link to={"/"}>
          <div className="h-[50px]">
            <img className="h-full" src="/images/jumia-logo.png" alt="jumia" />
          </div>
        </Link>
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
            <button className="bg-[#FF9900] rounded-md text-white px-3 py-2 hover:bg-[#E07E1B] shadow-lg">
              SEARCH
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div
              onClick={showAcc}
              className="flex items-center gap-2 hover:text-[#FF9900] cursor-pointer transition-all duration-100"
            >
              <HiOutlineUser className="text-2xl" />
              <p>Account</p>
              <MdKeyboardArrowDown />
            </div>

            <div
              onClick={showHelp}
              className="flex items-center gap-2 hover:text-[#FF9900] cursor-pointer transition-all duration-100"
            >
              <BiHelpCircle className="text-2xl" />
              <p>Help</p>
              <MdKeyboardArrowDown />
            </div>

            <div className="flex items-center gap-2 hover:text-[#FF9900] cursor-pointer transition-all duration-100">
              <AiOutlineShoppingCart className="text-2xl" />
              <p>Cart</p>
            </div>
          </div>
        </div>
        {acc && <Account />}
        {help && <Help />}
      </div>

      {/* MOBILE VIEW */}
      <div className="bg-white px-[20px] py-5 lg:hidden items-center">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2 items-center">
            <GiHamburgerMenu className="text-2xl" />
            <div className="h-[20px]">
              <img
                className="h-full"
                src="/images/jumia-logo.png"
                alt="jumia"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="signin">
              <div className="flex items-center gap-2 hover:text-[#FF9900] transition-all duration-100">
                <HiOutlineUser className="text-2xl" />
              </div>
            </Link>

            <div className="flex items-center gap-2 hover:text-[#FF9900] transition-all duration-100">
              <AiOutlineShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex item-center justify-center gap-3">
          <div className="flex-1 flex item-center justify-center gap-3">
            <div className="flex items-center border border-[#A3A3A6] rounded-md w-full p-[5px] md:p-[10px]">
              <MdSearch className="text-2xl mr-[10px] text-[#A3A3A6] font-bold" />
              <input
                className="flex-1 border border-none focus:outline-0"
                type="text"
                placeholder="Search products, brands and categories"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
