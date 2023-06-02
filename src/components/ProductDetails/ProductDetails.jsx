import { useParams } from "react-router-dom";
import { useProductDetails } from "../CustomHook/useProductDetails";
import { AiOutlineHeart, MdOutlineAddShoppingCart } from "react-icons/all";
import { motion } from "framer-motion";
import Promotion from "./Promotion";

const ProductDetails = () => {
  const { productID } = useParams();

  const { isLoading, isError, data } = useProductDetails(productID);

  console.log(data?.data);

  const realPrice = Math.ceil(
    data?.data.price / ((100 - data?.data.percent) / 100)
  );

  if (isLoading) {
    return (
      <h2 className="text-center mt-2 text-[#FF9900] text-xl font-medium">
        Loading product...
      </h2>
    );
  }

  return (
    <div className="mx-[55px] my-[30px] p-3 border-2 border-red-500 flex gap-3">
      <div className="flex bg-white rounded-md border-2 w-[80%] border-yellow-600">
        <div className="mx-2 p-4">
          <img src={data?.data.imageURL} alt="product" />
        </div>

        <div className="flex-1 py-2 px-4 w-[550px]">
          {/* Details section */}
          <div className="flex items-start justify-between border-b-2 border-[#f1f1f2] pb-2">
            <div>
              <h4 className="text-xl w-[95%]">{data?.data.label}</h4>
              <h5 className="text-sm my-2">
                <span>Brand:</span>{" "}
                <span className="text-[#2671C2] hover:underline">
                  {data?.data.title}
                </span>
              </h5>
            </div>
            <div className="cursor-pointer w-10 h-10 hover:bg-[#FCDBB9] flex items-center justify-center rounded-full">
              <AiOutlineHeart className="text-2xl text-[#FF9900]" />
            </div>
          </div>
          {/* Price Section */}
          <div className="border-b-2 border-[#f1f1f2]">
            {/* If there is price then render price */}
            {data?.data.price && (
              <h2 className="text-2xl font-bold my-2">₦{data?.data.price}</h2>
            )}

            <div className="flex gap-2 items-center justify-between w-min">
              {/* if there is percentage, render real price. */}
              {data?.data.percent && (
                <p className="text-lg text-[#75757A] line-through">
                  ₦{realPrice}
                </p>
              )}

              {/* if there is percentage, render it */}
              {data?.data.percent && (
                <span className="text-[#FF9900] bg-[#FEF3E9] p-1">
                  -{data?.data.percent}%
                </span>
              )}
            </div>

            <p className="mt-3 mb-8 text-xs">
              + ₦210 shipping fee from the company
            </p>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex items-center w-full bg-[#FF9900] rounded-md text-white px-4 py-2 hover:bg-[#E07E1B] shadow-lg mb-4"
            >
              <p className="mx-auto text-sm font-medium">ADD TO CART</p>
              <MdOutlineAddShoppingCart className="text-lg font-medium" />
            </motion.button>
          </div>
          <Promotion />
        </div>
      </div>
      {/* Delivery Section */}
      <div className="bg-white border border-sky-400 rounded-md flex-1">
        <div className="border-b-2 border-[#f1f1f2]">
          <p className="text-sm font-medium p-2">DELIVERY & RETURNS</p>
        </div>

        <div className="border-b-2 border-[#f1f1f2]">
          <div className="p-2">
            <img src="" alt="" />
            <p className="text-[9px] font-medium ">
              Free delivery on thousands of products in Lagos, Ibadan & Abuja{" "}
              <span className="text-[11px] text-[#2671C2] cursor-pointer hover:underline">
                Details
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
