import styled from "styled-components";
import { thema } from "../../style/thema";


export const Header = styled.header`
    display:flex;
    justify-content: center;
    width: 100%;
    height:180px;
    min-width: auto;
    background-color: ${thema.colors.gray};
`

export const HeaderContainer = styled.section`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width:1200px;
    height: auto;

    padding: .5rem;

    span {
        font-size: ${thema.font.bigFont};
        color: ${thema.colors.green};
    } 
`

export const NewTransaction = styled.button `
    padding:1rem;

    border: none;
    border-radius:${thema.border.borderRadius};

    font-size:${thema.font.mediumFont};
    font-weight:bold;
    color:white;

    background-color: ${thema.colors.green};

    cursor: pointer;
    transition:all 100ms ease-in;
    &:hover {
        background-color: ${thema.colors.greenLigth};
    }
`