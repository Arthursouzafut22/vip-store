"use client";

import * as S from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { FaSignInAlt, FaListOl } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { colors } from "@/utils/colors";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef } from "react";

const MenuMobile = ({ closeMenu }: { closeMenu: () => void }) => {
  const router = useRouter();
  const refMenuMobile = useRef<HTMLDivElement>(null);

  useClickOutside(refMenuMobile, () => closeMenu());

  return (
    <S.MenuMobile ref={refMenuMobile}>
      <S.Box>
        <span>Menu</span>
        <button onClick={closeMenu}>
          <IoCloseSharp fontSize={28} color={colors.ligthGray} />
        </button>
      </S.Box>
      <S.WrapperButtonsMobile>
        <button onClick={() => router.push("")}>
          <FaSignInAlt />
          <span>Fazer login</span>
        </button>
        <button onClick={() => router.push("/")}>
          <FiHome />
          <span>Início</span>
        </button>
        <button onClick={() => router.push("/catalog")}>
          <FaListOl />
          <span>Catálogo</span>
        </button>
      </S.WrapperButtonsMobile>
    </S.MenuMobile>
  );
};

export default MenuMobile;
