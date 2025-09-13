import { colors } from "@/utils/colors";
import styled from "@emotion/styled";
import Link from "next/link";

export const Header = styled.header`
  padding: 0 1.25rem;
  border-bottom: 1px solid hsl(240, 3.7%, 15.9%);
`;

export const Nav = styled.nav`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.38rem 0;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: ${colors.fontColor};
  font-size: 1.25rem;
  font-weight: 600;

  span {
    color: ${colors.details};
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  .border {
    background-color: rgb(82 82 91 / 1);
    height: 16px;
    width: 1px;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: ${colors.fontColor};
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    color: ${colors.details};
  }
`;

export const WrapperButttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${colors.fontColor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${colors.secundary} !important;
    }
  }

  button:first-child {
    white-space: nowrap;
    font-size: 0.875rem;
    font-weight: 500;
    width: 7rem;
    height: 2.5rem;
    padding: 0;
    border-radius: 0.5rem;
    border: 1px solid hsl(240, 3.7%, 15.9%);
    background-color: hsla(240, 10%, 10%, 0.039);
  }
  button:last-child {
    border: 1px solid hsl(240, 3.7%, 15.9%);
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    position: relative;
    background-color: hsla(240, 10%, 10%, 0.039);
  }
`;

export const ButtonMobile = styled.button`
  border: 1px solid hsl(240, 3.7%, 15.9%);
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  position: relative;
  background-color: hsla(240, 10%, 10%, 0.039);
  cursor: pointer;

  &:hover {
    background-color: ${colors.secundary} !important;
  }
`;
