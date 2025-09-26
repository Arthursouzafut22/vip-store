"use client";

import Image from "next/image";
import * as S from "./styles";

export const BannerFrete = () => {
  return (
    <S.ContainerBanner>
      <S.WrapperBanner>
        <Image
          src={"/banners/banner-frete.webp"}
          alt="banner-frete"
          decoding="async"
          width={1920}
          height={408}
        />
      </S.WrapperBanner>
    </S.ContainerBanner>
  );
};
