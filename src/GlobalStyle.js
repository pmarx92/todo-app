import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  text-decoration: none;
  list-style: none;
  background-color: #B4BEC9;
  color: #fff;
}
li {
  justify-content: flex-start;
  background-color: #DEEFE7;
  color: black;
  margin-right: 5rem;
}
body {
  font-family: sans-serif;
  margin: 0;

}
`;

export default GlobalStyle;
