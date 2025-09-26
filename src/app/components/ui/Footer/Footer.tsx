"use client";

import { colors } from "@/utils/colors";
import * as S from "./styles";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

export const Footer = () => {
  let linkLinkedin = "https://www.linkedin.com/in/arthur-santos-588168256/";
  let linkGitHub = "https://github.com/Arthursouzafut22";

  return (
    <S.Footer>
      <S.WrapperFooter>
        <p style={{ color: colors.fontColor, fontSize: "12px" }}>
          © 2023 Copyright FSW Store
        </p>

        <S.WrapperRedes>
          <Link
            target="_blank"
            href={linkLinkedin}
            style={{ color: colors.fontColor }}
          >
            <FaLinkedin size={25} />
          </Link>
          <Link
            target="_blank"
            href={linkGitHub}
            style={{ color: colors.fontColor }}
          >
            <IoLogoGithub size={25} />
          </Link>
        </S.WrapperRedes>
      </S.WrapperFooter>
    </S.Footer>
  );
};
