"use client";
import * as S from "./styles";
import { LuShoppingCart } from "react-icons/lu";
import { BiUser } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import useMedia from "@/hooks/useMedia";
import { colors } from "@/utils/colors";

const Header = () => {
  const { mobile } = useMedia("(max-width:1025px)");

  return (
    <S.Header>
      <S.Nav>
        {mobile && (
          <S.ButtonMobile aria-label={"Abrir menu"} aria-expanded={false}>
            <CgMenu fontSize={25} color={colors.fontColor} />
          </S.ButtonMobile>
        )}
        <S.LogoLink href={"/"}>
          <span>VIP</span> Store
        </S.LogoLink>
        {!mobile && (
          <S.WrapperLinks>
            <S.Links href={"/"}>Inicio</S.Links>
            <div className={"border"}></div>
            <S.Links href={"/catalog"}>Catálogo</S.Links>
          </S.WrapperLinks>
        )}
        <S.WrapperButttons>
          {!mobile && (
            <button>
              <BiUser fontSize={25} />
              Entrar
            </button>
          )}
          <button>
            <LuShoppingCart fontSize={25} />
          </button>
        </S.WrapperButttons>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
