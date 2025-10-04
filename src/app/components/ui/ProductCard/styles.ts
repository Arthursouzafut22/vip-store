import { colors } from "@/utils/colors";
import styled from "@emotion/styled";
import Link from "next/link";

export const CardProduct = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${colors.fontColor};
  max-width: 185px;
  width: 100%;
  position: relative;

  b {
    background-color: ${colors?.details};
    position: absolute;
    font-size: 0.75rem;
    line-height: 1rem;
    top: 10px;
    left: 10px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
  }
  p {
    font-size: 0.875rem;
    margin-top: 7px;
    margin-bottom: 3px;
    white-space: nowrap;
    text-overflow: ellipsis !important;
    width: 175px !important;
    overflow-x: hidden;
  }
`;

export const WrapperImage = styled.div`
  height: 10.85rem;
  max-width: 100%;
  background-color: ${colors.secundary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(240, 3.7%, 15.9%);
  border-radius: 0.5rem;

  img {
    display: block;
    transition: 0.3s;
    max-width: 100% !important;
    object-fit: contain;

    &:hover {
      transform: scale(1.1) !important;
    }
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: 600;
  }
  p {
    font-size: 0.75rem;
    text-decoration-line: line-through;
    opacity: 0.75;
    font-weight: 600;
  }
`;

export const ContainerRatings = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 5px;

  span {
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${colors.ligthGray};
  }
`;
