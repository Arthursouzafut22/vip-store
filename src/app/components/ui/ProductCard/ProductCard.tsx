"use client";

import { ProductsProps } from "@/actions/getProducts/types";
import Image from "next/image";
import * as S from "./styles";
import { formatPrice } from "@/utils/formatePrice";
import { countRatings } from "@/functions/countRatings/countRatings";
import { colors } from "@/utils/colors";
import { IoMdArrowDown } from "react-icons/io";

const ProductCard = ({ item }: { item: ProductsProps }) => {
  return (
    <S.CardProduct href={`/product?id=${item?.id}&category=${item?.categoria}`}>
      {item?.desconto !== 0 && (
        <b>
          {" "}
          <IoMdArrowDown size={16} /> {item?.desconto}%
        </b>
      )}
      <S.WrapperImage>
        <Image
          src={`/productss/${item?.fotos[0]}`}
          alt={item?.nome}
          width={100}
          height={100}
          decoding="async"
        />
      </S.WrapperImage>
      <p>{item?.nome}</p>
      <S.ContainerPrice>
        <span>{formatPrice(item?.preco)}</span>
        {item?.preco_antigo !== null && (
          <p>{formatPrice(item?.preco_antigo)}</p>
        )}
      </S.ContainerPrice>
      <S.ContainerRatings>
        <div>
          {countRatings(item?.avaliacao).map((item, index) => {
            const Icon = item;
            return <Icon key={index} size={19} color={colors?.details} />;
          })}
        </div>
        <span>({item?.total_avaliacao})</span>
      </S.ContainerRatings>
    </S.CardProduct>
  );
};

export default ProductCard;
