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

&::-webkit-scrollbar {
  width: 10px;
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
