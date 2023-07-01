import { HiOutlineHome } from "react-icons/hi2";

import {
  CiApple,
  GiPressureCooker,
  GiSmartphone,
  GiBabyFace,
  HiOutlinePaintBrush,
  HiOutlineRadio,
  HiOutlineComputerDesktop,
  IoShirtOutline,
  IoGameControllerOutline,
  IoTennisballOutline,
  TbDotsCircleHorizontal,
} from "react-icons/all";

import MenuItem from "./MenuItem";
import { FaTimes } from "react-icons/fa";

const Menu = ({ mobile, hideSide }) => {
  return (
    <>
      <div
        className={`bg-white w-[206px]  rounded-md p-2 ${
          mobile ? "" : "hidden"
        } lg:flex flex-col ${
          mobile
            ? "flex flex-col gap-3 h-[calc(100vh_-_30px)] md:h-[calc(100vh_-_70px)] justify-evenly"
            : "h-max gap-[4px]"
        } xl:gap-3`}
      >
        <FaTimes
          onClick={() => hideSide()}
          className={`text-2xl ${
            mobile
              ? "flex cursor-pointer absolute top-0 right-0 mx-3 my-4"
              : "hidden"
          }`}
        />

        <MenuItem text="Supermarket" icon={<CiApple />} />
        <MenuItem text="Health & Beauty" icon={<HiOutlinePaintBrush />} />
        <MenuItem text="Home & Office" icon={<HiOutlineHome />} />
        <MenuItem text="Appliances" icon={<GiPressureCooker />} />
        <MenuItem text="Phones & Tablets" icon={<GiSmartphone />} />
        <MenuItem text="Computing" icon={<HiOutlineComputerDesktop />} />
        <MenuItem text="Electronics" icon={<HiOutlineRadio />} />
        <MenuItem text="Fashion" icon={<IoShirtOutline />} />
        <MenuItem text="Baby Products" icon={<GiBabyFace />} />
        <MenuItem text="Gaming" icon={<IoGameControllerOutline />} />
        <MenuItem text="Sporting Goods" icon={<IoTennisballOutline />} />
        <MenuItem text="Other Categories" icon={<TbDotsCircleHorizontal />} />
      </div>
    </>
  );
};

export default Menu;
