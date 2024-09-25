import { createGlobalStyle } from "styled-components";
import "../fonts/Pretendard.css";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --vh: 100%;
    margin: 0 auto;
    max-width: 375px;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  * {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
