import { MdOutlineDelete, AiOutlineHeart } from "react-icons/all";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

const SaveRemove = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 border-2 border-red-300 w-[500px] p-4">
      <h4 className="text-lg font-semibold">Remove from cart</h4>

      <p className="text-sm">
        Do you really want to remove this item from cart?
      </p>

      <div className="flex gap-2">
        <motion.div
          whileTap={{ scale: 0.7 }}
          //   onClick={removeItemHandler}
          className="flex items-center border-2 border-[#ff9900] hover:bg-[#F2E8DE] text-[#ff9900] cursor-pointer py-3 px-4 rounded-md w-1/2"
        >
          <AiOutlineHeart className="text-2xl" />
          <p className="text-sm font-medium mx-auto">SAVE FOR LATER</p>
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.7 }}
          //   onClick={removeItemHandler}
          className="flex items-center text-white bg-[#ff9900] cursor-pointer py-3 px-4 rounded-md w-1/2"
        >
          <MdOutlineDelete className="text-2xl" />
          <p className="text-sm font-medium mx-auto">REMOVE</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SaveRemove;
