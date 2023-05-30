import FifthSection from "../FifthSection/FifthSection";
import FirstSection from "../FirstSection/FirstSection";
import FourthSection from "../FourthSection/FourthSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
const Home = () => {
  return (
    <div className="my-4 w-full px-[0px] lg:px-[55px]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
};

export default Home;
