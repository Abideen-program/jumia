import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "../CarouselWrapper/SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";

const ThirdSection = () => {
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
      <h3 className="bg-white text-lg font-bold py-2 px-4">Top Selling Items</h3>
      <Wrapper count={count}>
        <SlideItem
          title="2 in 1 Men's Short Sleev.."
          image="/images/sport.jpg"
          price={3000}
          percent={55}
        />

        <SlideItem
          title="Biore UV Aqua Rich Wate.."
          image="/images/one.jpg"
          price={2800}
          percent={20}
        />

        <SlideItem
          title="EILIFINTE B06 Casual Cros.."
          image="/images/bag.jpg"
          price={1920}
          percent={72}
        />

        <SlideItem
          title="2 in 1 Men's Short Sleev.."
          image="/images/yellow.jpg"
          price={2900}
          percent={55}
        />

        <SlideItem
          title="Eaget Flash Drive 3.0 64G.."
          image="/images/eaget.jpg"
          price={2710}
          percent={47}
        />

        <SlideItem
          title="100% Cotton Short Sleev.."
          image="/images/whitevest.jpg"
          price={3900}
          percent={52}
        />

        <SlideItem
          title="Summer Men's Loose Sh.."
          image="/images/summer.jpg"
          price={3000}
          percent={75}
        />

        <SlideItem
          title="Men's Sport T-Shirt+Pan.."
          image="/images/sportwhite.jpg"
          price={3500}
          percent={65}
        />

        <SlideItem
          title="Feng Shui Black Obsidian.."
          image="/images/bracelet.jpg"
          price={839}
          percent={1}
        />

        <SlideItem
          title="Summer Men's Loose Sh.."
          image="/images/flower.jpg"
          price={2900}
          percent={74}
        />

        <SlideItem
          title="Geneva Unisex Casual Wr"
          image="/images/watch.jpg"
          price={3500}
          percent={42}
        />

        <SlideItem
          title="IPhone X 3GB RAM+64G.."
          image="/images/phone.jpg"
          price={174500}
          percent={47}
        />

        <SlideItem
          title="Fruit Lip Balm Unisex Pink.."
          image="/images/lips.jpg"
          price={900}
          percent={74}
        />

        <SlideItem
          title="Men's Casual Light Weigh.."
          image="/images/jacket.jpg"
          price={2493}
          percent={49}
        />

        <SlideItem
          title="Fngeen 05 Calender Spor.."
          image="/images/fngeen.jpg"
          price={5000}
          percent={82}
        />
      </Wrapper>
    </>
  );
};

export default ThirdSection;
