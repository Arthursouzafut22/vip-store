import { colors } from '@/utils/colors';
import styled from '@emotion/styled';

export const WrapperCategory = styled.div`
  max-width: 1250px;
  margin: 28px auto auto auto;
`;

export const NavCategory = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.875rem;
    height: 2.5rem;
    font-weight: 600;
    padding: 0;
    border-radius: 0.5rem;
    border: 1px solid hsl(240, 3.7%, 15.9%);
    background-color: hsla(240, 10%, 10%, 0.039);
    color: ${colors.fontColor};
    cursor: pointer;

    &:hover {
      background-color: ${colors.secundary} !important;
    }
  }
`;