import { createGlobalStyle } from "styled-components";
import {thema} from './thema'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        background-color:${thema.colors.grayBackground};
    }
`;
