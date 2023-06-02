import { useParams } from "react-router-dom";
import { useProductDetails } from "../CustomHook/useProductDetails";
import { AiOutlineHeart, MdOutlineAddShoppingCart } from "react-icons/all";

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
    <div className="mx-[55px] my-[30px] p-3 border-2 border-red-500 flex">
      <div className="flex bg-white rounded-md">
        <div className="border-b-2 border-[#f1f1f2] mx-2 p-4">
          <img src={data?.data.imageURL} alt="product" />
        </div>

        <div className="border-2 flex-1 border-yellow-500 py-2 px-4 w-[550px]">
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
          <div>
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

            <button className="flex items-center w-full bg-[#FF9900] rounded-md text-white px-4 py-2 hover:bg-[#E07E1B] shadow-lg">
              <MdOutlineAddShoppingCart className="text-lg font-medium" />
              <p className="mx-auto text-sm font-medium">ADD TO CART</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
