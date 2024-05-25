// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import "xp.css/dist/XP.css";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Tahoma', sans-serif;
        background-color: #008080;
        overflow: hidden;
    }
`;

export default GlobalStyle;
