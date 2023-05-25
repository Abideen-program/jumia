import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import SlideItem from "./SlideItem";

const CarouselWrapper = () => {
  const width = window.innerWidth;
  let count;

  if (width > 1160) count = 8;
  if (width === 1024) count = 6;
  if (width === 768) count = 5;
  if (width === 425) count = 3;
  if (width === 375) count = 3;
  if (width === 320) count = 2;

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: count,
    slidesToScroll: 4,
    // autoplay: true,
    speed: 1000,
    cssEase: "linear",
  };

  return (
    <Carousel
      {...settings}
      className="bg-white my-4 px-[50px] py-1 overflow-y-hidden overflow-x-scroll relative  w-full rounded-md scrollbar-none"
    >
      <SlideItem title="Phone & Tablets" image="/images/phones.png" />
      <SlideItem title="Up to 30% Off" image="/images/clearance.png" />
      <SlideItem title="Televisions" image="/images/Television.jpg" />
      <SlideItem title="Groceries" image="/images/groceries.png" />
      <SlideItem title="Refrigerators" image="/images/refreigerator.jpg" />
      <SlideItem title="Electronics" image="/images/electronics.png" />
      <SlideItem title="Men's Sneakers" image="/images/sneakers.png" />
      <SlideItem title="Best Sellers" image="/images/best.png" />
      <SlideItem title="Health & Beauty" image="/images/health-beauty.png" />
      <SlideItem title="Up to 80% Off" image="/images/exclusive.png" />
      <SlideItem title="Mobile Accessories" image="/images/accessories.png" />
      <SlideItem title="Portable Power" image="/images/portable-power.png" />
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  & > button {
    height: 100%;
    width: 7vw;
    cursor: pointer;
    z-index: 1;
    opacity: 1;

    &:before {
      font-size: 30px;
      color: gray;
      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      width: 0vw;
    }
  }

  ul li button {
    position: absolute;
    top: -35px;

    &:before {
      font-size: 10px;
      color: #828284;
    }
  }

  li.slick-active button:before {
    color: #ff9900;
  }

  .slick-list {
    overflow: initial;
  }
`;

export default CarouselWrapper;
