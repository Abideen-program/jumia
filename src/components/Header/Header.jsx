import { useState } from "react";
import {
  MdSearch,
  MdKeyboardArrowDown,
  FiUserCheck,
  AiOutlineShoppingCart,
  GiHamburgerMenu,
  BiHelpCircle,
} from "react-icons/all";
import { HiOutlineUser } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { nameFormater } from "../utils/nameFormatter";

import Banner from "./Banner";
import Account from "./Account";
import Help from "./Help";

function Header() {
  const user = useSelector((state) => state.user.user);

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

  //get the user email
  const email = user?.email;

  //format the user email to get a name
  let name;
  if (user) {
    const formattedName = nameFormater(email);
    name = formattedName.toUpperCase();
  }

  console.log(name);

  return (
    <>
      <Banner />
      {/* DESKETOP NAVBAR */}
      <div className="bg-white hidden px-[50px] gap-16 py-5 lg:flex items-center relative right-0 left-0 z-20">
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
              {user ? (
                <div className="bg-[#D3D3D5] flex items-center justify-center gap-2 p-3 rounded-md w-max">
                  <FiUserCheck className="text-2xl" />
                  <p className="text-lg">Hi, {name}</p>
                  <MdKeyboardArrowDown />
                </div>
              ) : (
                <>
                  <HiOutlineUser className="text-2xl" />
                  <p>Account</p>
                  <MdKeyboardArrowDown />
                </>
              )}
            </div>

            <div
              onClick={showHelp}
              className="flex items-center gap-2 hover:text-[#FF9900] cursor-pointer transition-all duration-100"
            >
              <BiHelpCircle className="text-2xl" />
              <p>Help</p>
              <MdKeyboardArrowDown />
            </div>

            <Link to="cart">
              <div className="flex items-center gap-2 hover:text-[#FF9900] cursor-pointer transition-all duration-100">
                <AiOutlineShoppingCart className="text-2xl" />
                <p>Cart</p>
              </div>
            </Link>
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
            <Link to="/">
              <div className="h-[20px]">
                <img
                  className="h-full"
                  src="/images/jumia-logo.png"
                  alt="jumia"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="signin">
              <div className="flex items-center gap-2 hover:text-[#FF9900] transition-all duration-100">
                <HiOutlineUser className="text-2xl" />
              </div>
            </Link>
            <Link to="cart">
              <div className="flex items-center gap-2 hover:text-[#FF9900] transition-all duration-100">
                <AiOutlineShoppingCart className="text-2xl" />
              </div>
            </Link>
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

      <Outlet />
    </>
  );
}

export default Header;
