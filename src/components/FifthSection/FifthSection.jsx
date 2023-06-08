import SlideItem from "../CarouselWrapper/SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FifthSection = ({ isLoading }) => {
  const products = useSelector((state) => state.products.products);

  const width = window.innerWidth;
  let count;

  if (width > 1160) count = 6;
  if (width === 1024) count = 5;
  if (width === 768) count = 4;
  if (width === 425) count = 2;
  if (width === 375) count = 2;
  if (width === 320) count = 1;

  return (
    <>
      {isLoading ? (
        <h3 className="my-4 text-center bg-green-300 text-white font-medium">
          Loading products!!!
        </h3>
      ) : (
        <>
          <h3 className="bg-[#FEE2CC] rounded-t-md font-medium text-xs md:text-lg py-2 px-4 flex items-center justify-between">
            <span>Limited Stock Deal</span>
            <span className="md:text-[15px] flex items-center">
              SEE ALL <MdKeyboardArrowRight />
            </span>
          </h3>
          <Wrapper count={count}>
            {products
              ?.filter((product, index) => index > 29 && index <= 44)
              .map((product) => {
                return (
                  <Link key={product.id} to={`/${product.id}`}>
                    <SlideItem
                      key={product.id}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      percent={product.percent}
                    />
                  </Link>
                );
              })}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default FifthSection;
