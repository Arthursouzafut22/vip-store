import styled from "@emotion/styled";

export const ContainerBanners = styled.div`
  padding: 0 1.25rem;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const BoxImages = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  max-width: 1250px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    gap: 0px;

    img {
      width: 100% !important;
    }
  }

  .img1 {
    display: block;
    max-width: 100% !important;
    height: auto;
    width: 625px;
    flex: 1;
  }
`;
