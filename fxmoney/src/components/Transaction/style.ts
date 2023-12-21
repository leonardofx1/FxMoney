import styled from 'styled-components'
import { thema } from '../../style/thema'


export const TransactionContainer = styled.section`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    width:100%;
    margin-top:-3rem;
    height:100px;
    gap:1rem;
`
export const SummaryContainer = styled.section`
  display: flex;
        gap: 1rem;
        min-width: 200px;
        min-height: auto;
        width: 100%;
        max-width: 1290px;
        @media screen and (max-width:800px) {
            overflow-x: scroll;
            &::-webkit-scrollbar {
            width: 12px;
        }
            &::-webkit-scrollbar-thumb {
                background-color: ${thema.colors.grayLigth};
                border-radius: 20px;
                border: 3px solid ${thema.colors.grayBackground}; 
    }
        
        }`

export const TransactionSummary = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    
    width:352px;
    height: 137px;
    padding:2rem;
    min-width: 200px;

    background-color:${(props) => props.color === 'green' ? thema.colors.green : thema.colors.grayLigth};
    border-radius:${thema.border.borderRadius};

    @media screen and (max-width:800px) {
        height: 150px;
        padding: 1rem;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        
        strong {
            font-size: 1rem;
        }
    }
`

export const TransactionIcon = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;



    span {
        font-size:1rem;
        color:${thema.colors.grayFont}
    }
`

export const Money = styled.strong`
    font-size: 2rem;
    color:${thema.colors.money};
`

export const TransactionTable = styled.table`
    min-height:50vh;
    width: 100%;
    max-width: 1290px;
    tbody {
        width: 100%;
        display:flex;
    flex-wrap:wrap;
    gap:1rem;
    }
`