import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    font-family: 'Roboto script=all rev=1' 
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
