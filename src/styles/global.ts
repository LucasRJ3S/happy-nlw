import {  createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: rgb(0, 0, 0);
  background: #ebf2f5;
}

body,
input,
button,
textarea {
  font: 600 18px Nunito, sans-serif
  ;
}
`;
