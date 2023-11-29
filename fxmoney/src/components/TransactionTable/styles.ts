import styled  from 'styled-components'
import { thema } from '../../style/thema'


export const TransactionHistory = styled.tr `
    display:flex;
    align-items:center;
    justify-content: space-between;
    background-color: ${thema.colors.grayLigth};
    width: 100%;
    border-radius:${thema.border.borderRadius};
    
   
    padding: 1.5rem;
   
`
type ColorProps ={color: 'green' | 'redDark' | 'grayFont'}
    


export const TransactionTableColumn = styled.td<ColorProps> `

    color:${(props) =>  thema.colors[props.color]  };

    &:nth-child(2) {
        font-weight: bold;
        font-size:1.2rem;
    }
    
`