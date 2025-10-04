"use client";

import { colors } from "@/utils/colors";
import * as S from "@/app/products/styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export const QuantityController = () => {
  const [quantity, setQuantity] = useState(1);


  return (
    <S.QuantityController>
      <button
        onClick={() => {
          if (quantity <= 1) {
            return;
          }
          setQuantity((p) => p - 1);
        }}
      >
        <IoIosArrowBack size={23} color={colors.fontColor} />
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => {
          setQuantity((p) => p + 1);
        }}
      >
        <IoIosArrowForward size={23} color={colors.fontColor} />
      </button>
    </S.QuantityController>
  );
};
