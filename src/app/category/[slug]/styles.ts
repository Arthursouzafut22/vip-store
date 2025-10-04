"use client";

import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 0 1.25rem;
`;

export const WrapperCategory = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.56rem;

  a {
    display: block !important;
    max-width: 100% !important;
  }
`;
