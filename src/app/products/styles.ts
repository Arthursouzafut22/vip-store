"use client";

import { colors } from "@/utils/colors";
import styled from "@emotion/styled";

export const Section = styled.div`
  padding: 0 1.25rem;

  @media screen and (max-width: 1083px) {
    padding: 0;
  }
`;

export const BoxProduct = styled.div`
  display: flex;
  align-items: start;
  gap: 1.75rem;
  max-width: 1250px;
  margin: 40px auto 70px auto;
  min-height: 100%;

  @media screen and (max-width: 1083px) {
    flex-wrap: wrap !important;
    margin: auto;
  }
`;

export const ContainerImage = styled.div`
  background-color: ${colors?.secundary};
  display: flex;
  padding: 2.5rem;
  max-width: 780px;
  gap: 2.5rem;
  flex: 2;
  min-height: 684px;
  max-height: 684px;
  border-radius: 0.75rem;

  @media screen and (max-width: 1083px) {
    flex-wrap: wrap !important;
    flex: initial !important;
    max-width: 100% !important;
    width: 100%;
    justify-content: center !important;
    align-items: center !important;
    min-height: initial;
    max-height: initial;
    flex-direction: column-reverse !important;
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    gap: 1.25rem;
  }
`;

export const BoxGalery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.63rem;
  max-width: 100%;

  @media screen and (max-width: 1083px) {
    background-color: #000000;
    flex-direction: row;

    .wrapper-img {
      background-color: ${colors?.secundary} !important;
    }
  }

  .wrapper-img {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    width: 80px;
    height: 80px;
    padding: 0.88rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: none;
    max-width: 100% !important;

    @media screen and (max-width: 427px) {
      width: 65px;
      height: 65px;
    }

    img {
      display: block;
      width: auto;
      height: auto;
      max-height: 100%;
    }
  }
`;

export const BoxImagePricipal = styled.div`
  padding-block: 2.5rem;

  @media screen and (max-width: 1083px) {
    width: 100%;
    background-color: ${colors?.secundary};
    padding-block: 4.38rem;

    img {
      width: 260px;
      max-width: 100%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 467px) {
    img {
      width: 55% !important;
    }
  }

  img {
    display: block;
    height: auto;
    max-width: 100% !important;
    max-height: 100% !important;
  }
`;

export const WrapperInformation = styled.div`
  background-color: ${colors?.secundary};
  flex: 1;
  padding: 2.5rem;
  min-height: 684px;
  max-height: 684px;
  border-radius: 0.75rem;

  @media screen and (max-width: 1083px) {
    padding: 1.25rem;
    background-color: transparent;
  }
`;

export const Box1 = styled.div`
  @media screen and (max-width: 1083px) {
    .nome {
      font-size: 1.25rem !important;
    }

    .vendidos {
      font-size: 0.75rem !important;
    }
  }
  .vendidos {
    font-size: 0.94rem;
    color: ${colors.ligthGray};
    margin-bottom: 8px;
  }

  .nome {
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin-bottom: 8px;
    display: block;
  }

  .estoque {
    font-size: 0.75rem;
    color: ${colors.details};
    font-weight: 500;
    margin-bottom: 8px;
  }

  .container-ratings {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
      font-size: 0.81rem;
      color: ${colors.ligthGray};
    }
  }
`;

export const BoxRatings = styled.div`
  display: flex;
  align-items: center;
  gap: 0.19rem;

  svg {
    display: block;
  }
`;

export const Box2 = styled.div`
  margin-top: 22px;

  .preco_antigo {
    font-size: 0.88rem;
    display: contents;
    color: ${colors.ligthGray};
    margin-top: 0px;

    span {
      text-decoration: line-through;
    }
  }
`;

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media screen and (max-width: 1083px) {
    span {
      font-size: 1.25rem !important;
    }

    .desconto {
      padding: 0.31rem 0.75rem !important;

      p {
        font-size: 0.81rem !important;
      }
    }
  }

  span {
    font-weight: 600;
    display: block;
    font-size: 1.88rem;
  }

  .desconto {
    display: flex;
    align-items: center;
    padding: 0.31rem 1.13rem;
    background-color: ${colors?.blueButton};
    border-radius: 999px;

    p {
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;

export const QuantityController = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 1.9rem;
    border: 1px solid hsl(240, 3.7%, 15.9%);
    border-radius: 0.375rem;
    height: 1.9rem !important;
    background-color: transparent;
    transition: 0.3s;

    &:hover {
      background-color: #27272a;
    }
  }

  p {
    font-weight: 500;
  }
`;

export const ContainerDescription = styled.div`
  margin-top: 14px;

  @media screen and (max-width: 1083px) {
    p {
      font-size: 0.875rem !important;
    }
  }

  span {
    font-weight: 600;
    margin-bottom: 8px;
    display: block;
  }

  p {
    opacity: 0.7;
    color: ${colors.ligthGray};
    line-height: 1.5rem;
    font-size: 0.94rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 18px;

  button {
    background-color: ${colors.blueButton};
    color: ${colors.fontColor};
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 0.88rem;
    white-space: nowrap;
    border-radius: 0.75rem;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background-color: #8b5cf6;
    }
  }

  .frete {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #27272a;
    padding: 0.75rem 1.13rem;
    border-radius: 0.75rem;
    margin-top: 10px;
    gap: 0.63rem;

    p {
      font-size: 0.88rem;
      line-height: 1.25rem;
    }
  }
`;
