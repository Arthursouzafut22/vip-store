"use client";

import { colors } from "@/utils/colors";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 0 1.25rem;
`;

export const WrapperCatalog = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

export const WrapperCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardCategory = styled.div`
  background-color: ${colors.secundary};
  max-height: 100%;
  border-radius: 0.5rem;
  cursor: pointer;

  img {
    display: block;
    margin: 0 auto;
  }

  p {
    text-align: center;
    margin: 0;
    padding: 0.31rem;
  }

  .wrapper-bg {
    background-image: linear-gradient(45deg, #5033c3, rgba(80, 51, 195, 0.2));
    padding: 1.25rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;
