"use client";

import useMedia from "@/hooks/useMedia";
import * as S from "./styles";
import Image from "next/image";

export const BannersDiscounts = () => {
  const { mobile } = useMedia("(max-width:768px)");

  return (
    <S.ContainerBanners>
      <S.BoxImages>
        <div>
          <Image
            src={"/banners/banner-mouses.webp"}
            alt="banner-mouses"
            width={625}
            height={200}
            className="img1"
          />
        </div>
        <div>
          <Image
            style={{ display: mobile ? "none" : "block" }}
            src={"/banners/banner-fones.webp"}
            alt="banner-fones"
            width={625}
            height={200}
            className="img1"
          />
        </div>
      </S.BoxImages>
    </S.ContainerBanners>
  );
};
