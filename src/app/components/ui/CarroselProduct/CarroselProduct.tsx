"use client";

import { ProductsProps } from "@/actions/getProducts/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";
import useMedia from "@/hooks/useMedia";

type CarroselProps = {
  categoryProduct: ProductsProps[];
};

export const CarroselProduct = ({ categoryProduct }: CarroselProps) => {
  const { mobile } = useMedia("(max-width:1218px)");

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={mobile ? "auto" : 6}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        0: {
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 26,
        },
        1200: {
          spaceBetween: 26,
        },
      }}
    >
      {categoryProduct &&
        categoryProduct.map((item: ProductsProps) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
