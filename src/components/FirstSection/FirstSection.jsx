import Menu from "./Menu";
import ImageSlider from "./ImageSlider";
import Delivery from "./Delivery";

const FirstSection = () => {
  return (
    <div className="flex gap-3 px-[55px]">
      <Menu />
      <ImageSlider />
      <Delivery />
    </div>
  );
};

export default FirstSection;
