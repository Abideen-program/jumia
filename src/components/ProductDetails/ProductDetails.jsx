import { useParams } from "react-router-dom";
import { useProductDetails } from "../CustomHook/useProductDetails";
import { AiOutlineHeart, MdOutlineAddShoppingCart } from "react-icons/all";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import Promotion from "./Promotion";
import Delivery from "./Delivery";
import Footer from "../Footer/Footer";
import {
  addItemToCart,
  setNotification,
} from "../Store/Features/CartItemSlice";

const ProductDetails = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartItems.cartItems);

  const { isLoading, isError, data } = useProductDetails(productID);

  const produtData = { ...data?.data, id: productID };

  const realPrice = Math.ceil(
    data?.data.price / ((100 - data?.data.percent) / 100)
  );

  const addToCartHandler = () => {
    dispatch(addItemToCart(produtData));

    dispatch(setNotification(true));

    const timer = setTimeout(() => {
      dispatch(setNotification(false));
      clearTimeout(timer);
    }, 2000);
  };

  if (isLoading) {
    return (
      <h2 className="text-center mt-2 text-[#FF9900] text-xl font-medium">
        Loading product...
      </h2>
    );
  }

  return (
    <>
      <div className="md:mx-[55px] my-[20px] p-3 flex flex-col lg:flex-row gap-3">
        <div className="md:flex bg-white rounded-md lg:w-[80%]">
          <div className="mx-2 p-4">
            <img
              className="w-full object-contain"
              src={data?.data.imageURL}
              alt="product"
            />
          </div>

          <div className="flex-1 py-2 px-4">
            {/* Details section */}
            <div className="lg:flex items-start justify-between border-b-2 border-[#f1f1f2] pb-2">
              <div>
                <h4 className="text-sm md:text-base lg:text-xl md:w-[95%]">
                  {data?.data.label}
                </h4>
                <h5 className="text-xs md:text-sm my-2">
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
                <h2 className="text-base md:text-2xl font-bold my-2">
                  ₦{data?.data.price}
                </h2>
              )}

              <div className="flex gap-2 items-center justify-between w-min">
                {/* if there is percentage, render real price. */}
                {data?.data.percent && (
                  <p className="text-sm md:text-lg text-[#75757A] line-through">
                    ₦{realPrice}
                  </p>
                )}

                {/* if there is percentage, render it */}
                {data?.data.percent && (
                  <span className="text-xs md:text-base text-[#FF9900] bg-[#FEF3E9] p-1">
                    -{data?.data.percent}%
                  </span>
                )}
              </div>

              <p className="mt-3 mb-8 text-xs">
                + ₦210 shipping fee from the company
              </p>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={addToCartHandler}
                className="flex items-center w-full bg-[#FF9900] rounded-md text-white px-4 py-2 hover:bg-[#E07E1B] shadow-lg mb-4"
              >
                <MdOutlineAddShoppingCart className="text-lg font-medium" />
                <p className="mx-auto text-sm font-medium">ADD TO CART</p>
              </motion.button>
            </div>
            <Promotion />
          </div>
        </div>
        {/* Delivery Section */}
        <Delivery />
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
