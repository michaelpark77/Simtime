import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    font-size: 10px;
}


* {
  box-sizing: border-box;
    }

#app{
    display: flex;
    flex-direction: row;
    justify-content : center;
}
`;
export default GlobalStyle;
