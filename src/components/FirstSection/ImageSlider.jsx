import SliderItem from "./SliderItem";
import CarouselWrapper from "./CarouselWrapper";

const ImageSlider = () => {
  return (
    <CarouselWrapper className="overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 overflow-x-scroll lg:overflow-x-hidden relative w-[712px] rounded-md">
      <SliderItem titlte={""} image={"/images/sliderone.png"} />

      <SliderItem titlte={""} image={"/images/slidertwo.png"} />

      <SliderItem titlte={""} image={"/images/sliderthree.jpg"} />

      <SliderItem titlte={""} image={"/images/sliderfour.jpg"} />

      <SliderItem titlte={""} image={"/images/sliderfive.jpg"} />

      <SliderItem titlte={""} image={"/images/slidersix.jpg"} />

      <SliderItem titlte={""} image={"/images/sliderseven.png"} />

      <SliderItem titlte={""} image={"/images/slidereight.png"} />
    </CarouselWrapper>
  );
};

export default ImageSlider;
