import SlideItem from "../CarouselWrapper/SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";
import { MdKeyboardArrowRight } from "react-icons/md";

const FifthSection = () => {
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
      <h3 className="bg-[#FEE2CC] rounded-t-md font-medium text-xs md:text-lg py-2 px-4 flex items-center justify-between">
        <span>Limited Stock</span>
        <span className="md:text-[15px] flex items-center">
          SEE ALL <MdKeyboardArrowRight />
        </span>
      </h3>
      <Wrapper count={count}>
        <SlideItem
          title="XAOMI Redmi 12C 6.53-i..."
          image="/images/redmi.jpg"
          price={65900}
          percent={16}
        />

        <SlideItem
          title='Hisense 32" Inches Satalli..'
          image="/images/hisensetv.jpg"
          price={89880}
          percent={1}
        />

        <SlideItem
          title="Pringles Original Potato C.."
          image="/images/pringles.jpg"
          price={1400}
        />

        <SlideItem
          title="Darling Superstar Color"
          image="/images/human-hair.jpg"
          price={1840}
          percent={9}
        />

        <SlideItem
          title="Silver Crest 2 Litres Germ.. "
          image="/images/blender.jpg"
          price={16990}
        />

        <SlideItem
          title="Coca-Cola Drink - 50cl"
          image="/images/coke.jpg"
          price={1869}
          percent={4}
        />

        <SlideItem
          title="Socks set of 6 - Multicolor"
          image="/images/ankle-socks.jpg"
          price={1299}
          percent={81}
        />

        <SlideItem
          title="Mtng 4G LTE MiFi - M30S"
          image="/images/wifi.jpg"
          price={7500}
        />

        <SlideItem
          title="Elepaq Constant Yaofeng"
          image="/images/gen.jpg"
          price={200000}
        />

        <SlideItem
          title="Dano Cool Cow 350g Sac.."
          image="/images/dano.jpg"
          price={1790}
        />

        <SlideItem
          title='UMIDIGI A13S 6.7" 4GB R..'
          image="/images/umidigi.jpg"
          price={69900}
          percent={46}
        />

        <SlideItem
          title="itel 3000mAh Triple Inpu.."
          image="/images/itel-power.jpg"
          price={16990}
          percent={43}
        />

        <SlideItem
          title="Irish Spring Soap Aloe 10"
          image="/images/Irish.jpg"
          price={1550}
        />

        <SlideItem
          title="NIVEA Dry Impact Roll-on.."
          image="/images/nivea.jpg"
          price={2100}
          percent={9}
        />

        <SlideItem
          title="Oraimo Power-Bank OPB..."
          image="/images/oraimo.jpg"
          price={10500}
          percent={49}
        />
      </Wrapper>
    </>
  );
};

export default FifthSection;
