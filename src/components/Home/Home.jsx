import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import FifthSection from "../FifthSection/FifthSection";
import FirstSection from "../FirstSection/FirstSection";
import FourthSection from "../FourthSection/FourthSection";
import SecondSection from "../SecondSection/SecondSection";
import SeventhSection from "../SeventhSection/SeventhSection";
import SixthSection from "../SixthSection/SixthSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import { setUser } from "../Store/Features/UserSlice";
import { setCartCount } from "../Store/Features/CartItemSlice";

import Footer from "../Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          setUser({
            email: authUser.email,
            name: authUser.displayName,
            image: authUser.photoURL,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  // useEffect(() => {
  //   const count = cartItems.reduce((prev, curr) => {
  //     return prev + curr.quantity;
  //   }, 0);

  //   dispatch(setCartCount(count));
  // }, [cartItems]);

  return (
    <>
      <div className="my-4 w-full px-[0px] lg:px-[55px]">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
