import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { Colors } from './constansts';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  #root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
  ol li,
  ul li {
    list-style: none;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  h1{
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  img {
    vertical-align: top;
  }
  html,
  body {
    margin: 0;
    font-family: 'Cairo', sans-serif;
    width: 100%;
    font-size: 18px;
    background-color:${Colors.MIDDLE_BLACK};
    color:${Colors.WHITE};
  }
  input[type="text"],
  input[type="search"] input[type="email"],
  input[type="tel"],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input,
  button,
  textarea {
    font-family: inherit;
  }
  `;
