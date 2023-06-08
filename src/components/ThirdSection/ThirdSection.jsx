import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "../CarouselWrapper/SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ThirdSection = ({ isLoading }) => {
  const products = useSelector((state) => state.products.products);

  const width = window.innerWidth;
  let count;

  if (width > 1160) count = 6;
  if (width === 1024) count = 5;
  if (width === 768) count = 4;
  if (width === 425) count = 2;
  if (width === 375) count = 2;
  if (width === 320) count = 1;

  console.log(products)

  return (
    <>
      {isLoading ? (
        <h3 className="my-4 text-center bg-green-300 text-white font-medium">
          Loading products!!!
        </h3>
      ) : (
        <h3 className="bg-white text-lg font-medium py-2 px-4">
          Top Selling Items
        </h3>
      )}
      <Wrapper count={count}>
        {products
          ?.filter((product, index) => index <= 14)
          .map((product) => {
            return (
              <Link key={product.id} to={`/${product.id}`}>
                <SlideItem
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  percent={product.percent}
                />
              </Link>
            );
          })}
      </Wrapper>
    </>
  );
};

export default ThirdSection;
