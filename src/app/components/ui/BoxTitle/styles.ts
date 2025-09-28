"use client";

import { colors } from "@/utils/colors";
import styled from "@emotion/styled";

export const BoxTitle = styled.div`
  margin-block: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.38rem;
  border: 2px solid ${colors.blueButton};
  max-width: 150px;
  padding: 0.6rem;
  border-radius: 9999px;

  h1 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
  }
`;