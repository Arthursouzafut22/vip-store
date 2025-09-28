import * as S from "./styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Img1 from "../../../../../public/banners/banner1.png";
import Img2 from "../../../../../public/banners/banner2.png";
import Img1Mobile1 from "../../../../../public/banners/banner1Mobile.jpg";
import Img1Mobile2 from "../../../../../public/banners/banner2Mobile.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useMedia from "@/hooks/useMedia";

const Carrosel = () => {
  const { mobile } = useMedia("(max-width:767px)");
  return (
    <S.ContainerCarrosel>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          1200: { slidesPerView: 1, spaceBetween: 20 },
        }}
      >
        <SwiperSlide>
          <Image
            src={mobile ? Img1Mobile1 : Img1}
            width={622}
            height={244}
            decoding="async"
            quality={100}
            alt="imagem-carrosel"
            style={{
              width: "100%",
              margin: "0 auto",
              objectFit: "cover",
              height: "auto",
              borderRadius: mobile ? "10px" : "0",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={mobile ? Img1Mobile2 : Img2}
            width={622}
            height={244}
            decoding="async"
            alt="imagem-carrosel"
            style={{
              width: "100%",
              margin: "0 auto",
              objectFit: "cover",
              height: "auto",
              borderRadius: mobile ? "10px" : "0",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </S.ContainerCarrosel>
  );
};

export default Carrosel;
