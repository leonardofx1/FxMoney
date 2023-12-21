import styled from "styled-components";
import { thema } from "../../style/thema";
import * as Dialog from '@radix-ui/react-dialog'


export const Header = styled.header`
    display:flex;
    justify-content: center;
    width: 100%;
    height:180px;
    min-width: auto;
    max-height: auto;
    padding: 1rem;
   
    background-color: ${thema.colors.gray};

    box-sizing: border-box;
    @media screen and (max-width:400px) {
  
        align-items: center;
        margin-bottom: 1rem;
        span{
            margin-bottom: 1rem;
        }
    }
`

export const HeaderContainer = styled.section`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    height: auto;

    padding: .5rem;


    span {
        font-size: ${thema.font.bigFont};
        color: ${thema.colors.green};
    } 
`

export const NewTransaction = styled(Dialog.Trigger) `
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