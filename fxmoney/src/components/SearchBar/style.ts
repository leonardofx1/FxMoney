import styled  from 'styled-components'
import { thema } from '../../style/thema'


export const Form = styled.form `
    display:flex;

    width: 100%;

    max-width: 1290px;
    gap:1rem;

    input { 
        flex:1;

        border:none;
        border-radius:${thema.border.borderRadius}
;
        padding:1rem;
        
            background-color: ${thema.colors.gray};
        
    }

    button {
        display:flex;
        align-items: center;
        justify-content: center;
        gap:.5rem;

        width: 147px;
        height:54px;

        border-radius: ${thema.border.borderRadius};
        border:1px solid ${thema.colors.green};

        color:${thema.colors.green};
        background-color: transparent;

        font-weight:bold;

        cursor:pointer;

        &:hover {
            background-color: ${thema.colors.green};
            color:white;
        }
    }
`