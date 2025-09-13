"use client";

import { colors } from "@/utils/colors";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-family: var(--font-poppins), sans-serif;
        }
        body {
          background-color: ${colors.primary};
          color: ${colors.fontColor};
        }
      `}
    ></Global>
  );
};

export default GlobalStyles;
