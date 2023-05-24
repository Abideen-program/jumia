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

const Menu = () => {
  return (
    <>
      <div className="bg-white w-[206px] h-[384px] rounded-md p-2 flex flex-col gap-3">
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
