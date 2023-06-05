import { Link } from "react-router-dom";
import ThirdSection from "../ThirdSection/ThirdSection";
import Footer from "../Footer/Footer";

const Cart = () => {
  return (
    <>
      <div className="px-5 lg:px-[55px] my-4">
        <div className=" bg-white rounded-md py-10 flex flex-col items-center justify-center gap-5 shadow-xl">
          <img src="/images/cart.svg" alt="" />
          <p className="text-sm font-semibold">Your cart is empty!</p>
          <p className="text-xs">
            Browse our categories and discover our best deals!
          </p>
          <Link to="/">
            <button className="bg-[#FF9900] rounded-md text-sm font-semibold text-white p-4 hover:bg-[#E07E1B] shadow-lg">
              START SHOPPING
            </button>
          </Link>
        </div>

        <div className="my-4">
          <ThirdSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
