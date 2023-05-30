import SlideItem from "../CarouselWrapper/SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";
import { MdKeyboardArrowRight } from "react-icons/md";

const FourthSection = () => {
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
      <h3 className="bg-[#E61601] rounded-t-md text-white text-lg py-2 px-4 flex items-center justify-between">
        <span className="font-semibold">Flash Sales</span>
        <span className="font-light flex gap-1">
          Time Left:<p className="font-semibold">06h : 48m : 18s</p>
        </span>
        <span className="text-[15px] flex items-center">
          SEE ALL <MdKeyboardArrowRight />
        </span>
      </h3>
      <Wrapper count={count}>
        <SlideItem
          title="Men's Loose Breathable S.."
          image="/images/white-shoe.jpg"
          price={3660}
          percent={59}
        />

        <SlideItem
          title="2 Pieces 2-in-1 Unisex Bu.."
          image="/images/hats.jpg"
          price={3599}
          percent={49}
        />

        <SlideItem
          title="Itel 1.7 Litres (IKE17U1) EI.."
          image="/images/kettle.jpg"
          price={6244}
          percent={46}
        />

        <SlideItem
          title="Women Shoes Ladies Sne."
          image="/images/black-shoe.jpg"
          price={3100}
          percent={54}
        />

        <SlideItem
          title="Simple Hydrating Light M.."
          image="/images/hydrate.jpg"
          price={5500}
          percent={21}
        />

        <SlideItem
          title="Buddhist Jewelry Mens' R.."
          image="/images/sliverbracelet.jpg"
          price={2100}
          percent={19}
        />

        <SlideItem
          title="Nivea Perfect & Radiant.."
          image="/images/nivea.jpg"
          price={2830}
          percent={2}
        />

        <SlideItem
          title="Nivea Nourishing Cocoa.."
          image="/images/niveacocoa.jpg"
          price={3980}
          percent={17}
        />

        <SlideItem
          title="Men Casual Work Leath.."
          image="/images/leathershoe.jpg"
          price={6300}
          percent={24}
        />

        <SlideItem
          title="Men's Casual Board Runn.."
          image="/images/white-trainers.jpg"
          price={4999}
          percent={74}
        />

        <SlideItem
          title="Philly J84 White 10000 M.."
          image="/images/powerbank.jpg"
          price={4700}
          percent={48}
        />

        <SlideItem
          title="Upper Arm Style Automat.."
          image="/images/pressure.jpg"
          price={7251}
          percent={47}
        />

        <SlideItem
          title="Socks Set of 6 - Multicolor"
          image="/images/socks.jpg"
          price={1299}
          percent={81}
        />

        <SlideItem
          title="Wedding Ring Set Diamo..."
          image="/images/rings.jpg"
          price={6500}
          percent={57}
        />
      </Wrapper>
    </>
  );
};

export default FourthSection;
