import { createGlobalStyle } from "styled-components";
import * as Color from "./Colors";

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

.app-contents{
  float: left;
  width: 920px;
  padding: 0 0.5rem 0.5rem 0.5rem;
  border-top: solid 8px ${Color["MAIN_COLOR"]};

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 0 0 0;
  }
}

&::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

&::-webkit-scrollbar-thumb {
  background-color: ${Color["ST_GRAY"]};
  border-radius: 10px;

  &:hover {
    background-color: ${Color["ST_SEMI_YELLOW"]};
  }

  
  &:active {
    background-color: ${Color["ST_SEMI_YELLOW"]};
  }
}

&::-webkit-scrollbar-track {
  background-color: ${Color["ST_SEMI_GRAY"]};
  border-radius: 5px;
  box-shadow: inset 0px 0px 3x white;
}
`;

export default GlobalStyle;
