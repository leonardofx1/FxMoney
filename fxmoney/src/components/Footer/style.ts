import styled from "styled-components";
import { thema } from "../../style/thema";

export const FooterContainer = styled.footer `
    
    width: 100%;
    margin: 1rem;
    height: 50px;

    display:flex;
    justify-content: center;
    align-items: center;

    border-top: 2px solid ${thema.colors.grayLigth};
    p {
        color:${thema.colors.grayFont};
    }
`