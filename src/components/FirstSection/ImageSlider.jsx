import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    cssEase: "linear",
  };

  return (
    <Carousel
      {...settings}
      className="overflow-hidden relative w-[712px] h-[384px] rounded-md"
    >
      <div className="focus:outline-0">
        <img
          className="w-full h-full object-contain"
          src="/images/sliderone.png"
          alt=""
        />
      </div>

      <div className="focus:outline-0">
        <img
          className="w-full h-full object-contain"
          src="/images/slidertwo.png"
          alt=""
        />
      </div>

      <div className="focus:outline-0">
        <img
          className="w-full h-full object-contain"
          src="/images/sliderthree.jpg"
          alt=""
        />
      </div>

      <div className="focus:outline-0">
        <img
          className="w-full h-full object-contain"
          src="/images/sliderfour.jpg"
          alt=""
        />
      </div>

      <div className="focus:outline-0">
        <img
          className="w-full h-full object-contain"
          src="/images/sliderfive.jpg"
          alt=""
        />
      </div>

      <div className="focus:outline-0">
        <img
          className="w-full h-full object-contain"
          src="/images/slidersix.jpg"
          alt=""
        />
      </div>

      <div className="focus:outline-0">
        <img
          className="w-full h-full object-contain"
          src="/images/sliderseven.png"
          alt=""
        />
      </div>

      <div className="focus:outline-0">
        <img
          className="w-full h-full object-contain"
          src="/images/slidereight.png"
          alt=""
        />
      </div>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  & > button {
    height: 100%;
    width: 10vw;
    cursor: pointer;
    z-index: 1;
    opacity: 0;

    &:hover {
      opacity: 1;
      transition: all 0.2s ease 0s;
    }

    &:before {
      font-size: 30px;
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

export default ImageSlider;
