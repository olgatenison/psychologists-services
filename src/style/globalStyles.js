import { css } from "@emotion/react";
import { useLocation } from "react-router-dom";
import { theme } from "../theme/theme";

const GlobalStyles = () => {
  const { pathname } = useLocation();

  return css`
    /* Reset CSS */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    dl,
    dd,
    ol,
    ul,
    figure,
    hr,
    fieldset,
    legend {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Inter", sans-serif;
      color: ${theme.colors.black};
      line-height: 1.5;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;

      background-color: ${pathname === "/favorites" ||
      pathname === "/psychologists"
        ? theme.colors.tag
        : theme.colors.white};
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  `;
};

export default GlobalStyles;
