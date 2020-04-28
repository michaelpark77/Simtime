import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app{
    display: flex;
    flex-direction: row;
    justify-content : center;
}
`;
export default GlobalStyle;
