import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #1b1b1b;;
        display: flex;
        justify-content: center;
    }
    h1{
        color: #bdd9b8;
        font-size: 3rem;
        font-family: Arial, Helvetica, sans-serif;
        text-shadow: 3px 1px 31px  #51f0a8;
    }
`

export default GlobalStyle;