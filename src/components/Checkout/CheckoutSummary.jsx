import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineDiscount } from "react-icons/all";
import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const count = useSelector((state) => state.cartItems.cartCount);
  const total = useSelector((state) => state.cartItems.cartTotal);
  return (
    <div className="flex flex-col gap-2 w-full lg:w-[270px]">
      <div className=" bg-white rounded-lg flex flex-col shadow-xl">
        <div className="p-2 border">
          <h3 className="text-sm font-medium">Order Summary</h3>
        </div>

        <div className="p-2 flex items-center justify-between border-b">
          <p className="text-xs">Item's total ({count})</p>
          <p className="text-xs font-semibold">₦ {total}</p>
        </div>

        <div className="p-2 flex items-center justify-between border-b">
          <p className="text-xs font-semibold">Total</p>
          <p className="text-lg font-semibold">₦ {total}</p>
        </div>

        <div className="p-2 flex items-center lg:justify-between border-b gap-2">
          <MdOutlineDiscount className="text-2xl text-[#ff9900]" />
          <p className="text-[10px] font-light">
            You will be able to add a voucher when selecting your payment
            method.
          </p>
        </div>

        <div className="px-2 py-3 inline-block">
          <Link to={"/"}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-[#A3A3A6] rounded-md text-sm font-medium text-white  hover:bg-[#E07E1B] shadow-md flex items-center justify-center p-3 w-full md:w-auto lg:w-full"
            >
              CONFIRM ORDER
            </motion.button>
          </Link>

          <p className="text-[9px] text-[#A3A3A6] text-center font-medium mt-2">
            (Complete the steps in order to proceed)
          </p>
        </div>
      </div>
      <p className="text-[10px] text-center">
        By proceeding, you are automatically accepting the{" "}
        <Link to="/">
          <span className="text-[#294B97] hover:underline">
            Terms & Conditions
          </span>
        </Link>
      </p>
    </div>
  );
};

export default CheckoutSummary;
