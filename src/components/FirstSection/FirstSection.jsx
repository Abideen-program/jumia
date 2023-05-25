import ImageSlider from "./ImageSlider";
import Menu from "./Menu";

const FirstSection = () => {
  return (
    <div className="flex gap-3 px-[55px]">
      <Menu />
      <ImageSlider />
      <Menu />
    </div>
  );
};

export default FirstSection;
