import styled from 'styled-components'
import { thema } from '../../style/thema'


export const TransactionContainer = styled.section `
    display:flex;
    justify-content: center;
    width:100%;
    margin-top:-3rem;
    height:100px;
    gap:1rem;

`

export const TransactionSummary = styled.div `
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    
    width:352px;
    height: 137px;
    padding:2rem;
    background-color:${(props) => props.color === 'green' ? thema.colors.green :thema.colors.grayLigth};
    border-radius:${thema.border.borderRadius};

`

export const TransactionIcon = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height:50px;

    span {
        font-size:1rem;
        color:${thema.colors.grayFont}
    }
`

export const Money = styled.strong `
    font-size: 2rem;
    color:${thema.colors.money};
`