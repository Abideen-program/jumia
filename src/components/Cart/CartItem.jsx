import { MdOutlineDelete, FaPlus, FaMinus } from "react-icons/all";
import { motion } from "framer-motion";
import CartSummary from "./CartSummary";

const CartItem = () => {
  const count = 1;

  return (
    <div className="my-4 flex lg:flex-row flex-col gap-3">
      <div className=" bg-white rounded-md flex flex-col shadow-xl flex-1 h-max">
        <div className="px-4 py-3 border">
          <h3 className="text-lg font-medium">Cart (1)</h3>
        </div>

        <div className="p-4 flex gap-4">
          <div className="h-[80px] w-[80px]">
            <img
              src="/images/yellow.jpg"
              alt="product"
              className="object-contain rounded-md"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-2 justify-between flex-1">
            <div>
              <h4 className="text-xs md:text-sm lg:text-base text-[#313133]">
                Summer Men's Loose Short Sleeve Hawaii Beach Shirt - Grey
              </h4>
              <p className="text-xs md:text-sm text-[#313133] my-1">
                <span className="text-xs md:text-base text-[#7D7D82]">
                  Seller:
                </span>
                <span> Jumia</span>
              </p>
              <p className="text-xs text-[#AF7D15] md:my-1">Few units left</p>
              <img
                className="w-[100px] hidden md:block"
                src="/images/jumexpress.png"
                alt=""
              />
            </div>

            <div className="flex flex-col md:items-end w-[150px]">
              <h4 className="md:text-xl font-medium">₦ 3000</h4>
              <div className="flex gap-2">
                <h5 className="text-sm md:text-base text-[#6A6A6E] line-through">
                  ₦ 6000
                </h5>
                <p className="text-xs w-max text-[#FF9900] bg-[#FEF3E9] p-1">
                  -50%
                </p>
              </div>

              <img
                className="w-[100px] mt-1 md:hidden"
                src="/images/jumexpress.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="px-4 pb-4 flex justify-between items-center">
          <motion.div
            whileTap={{ scale: 0.7 }}
            className="flex items-center gap-2 text-[#ff9900] cursor-pointer"
          >
            <MdOutlineDelete className="text-2xl" />
            <p className="text-sm font-medium">REMOVE</p>
          </motion.div>

          <div className="flex items-center justify-center gap-5">
            <motion.div
              whileTap={{ scale: 0.7 }}
              className={`${
                count > 1 ? "bg-[#ff9900]" : "bg-[#FAC58E]"
              } text-white h-[30px] w-[30px] flex items-center justify-center rounded-sm cursor-pointer`}
            >
              <FaMinus />
            </motion.div>
            <p className="text-medium">{count}</p>
            <motion.div
              whileTap={{ scale: 0.7 }}
              className={`bg-[#ff9900] text-white h-[30px] w-[30px] flex items-center justify-center rounded-sm cursor-pointer`}
            >
              <FaPlus />
            </motion.div>
          </div>
        </div>
      </div>
      <CartSummary />
    </div>
  );
};

export default CartItem;
