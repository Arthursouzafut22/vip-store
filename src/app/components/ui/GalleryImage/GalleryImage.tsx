"use client";

import { ProductsProps } from "@/actions/getProducts/types";
import * as S from "@/app/products/styles";
import useMedia from "@/hooks/useMedia";
import { colors } from "@/utils/colors";
import Image from "next/image";
import { useState } from "react";

type GalleryProps = {
  searchProduct: ProductsProps;
};

export default function GalleryImage({ searchProduct }: GalleryProps) {
  const [indexImage, setIndexImage] = useState(0);
  const { mobile } = useMedia("max-width: 1083px");

  const changeIndexImage = (index: number) => setIndexImage(index);

  return (
    <S.ContainerImage>
      <S.BoxGalery>
        {searchProduct &&
          searchProduct.fotos.map((foto, index) => (
            <button
              key={index}
              className="wrapper-img"
              onClick={() => changeIndexImage(index)}
              style={{
                border:
                  index === indexImage ? `1px solid ${colors.details}` : "",
              }}
            >
              <Image
                src={`/products/${foto}`}
                alt={`Imagem ${searchProduct.nome}`}
                width={54}
                height={54}
              />
            </button>
          ))}
      </S.BoxGalery>
      <S.BoxImagePricipal>
        <Image
          src={`/products/${searchProduct?.fotos[indexImage]}`}
          alt={`Imagem ${searchProduct?.nome}`}
          width={468}
          height={468}
        />
      </S.BoxImagePricipal>
    </S.ContainerImage>
  );
}
