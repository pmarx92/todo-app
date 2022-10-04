import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  text-decoration: none;
  list-style: none;
  background-color: #DEEFE7;
}

body {
  font-family: sans-serif;
  margin: 0;

}
`;

export default GlobalStyle;
