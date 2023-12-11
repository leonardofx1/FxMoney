import { TransactionType } from '../../@types/types'
import { formatCurrency} from '../../utils/formatDatePrice'
import * as S from './styles'




const TransactionTable = ({description, price, category, date, type}:TransactionType) => {
    console.log(date, typeof date)

    return (

          <S.TransactionHistory>
          <S.TransactionTableColumn color='grayFont'>
           {description}
          </S.TransactionTableColumn>
          <S.TransactionTablePrice varient={type}>{formatCurrency(price)}</S.TransactionTablePrice>
          <S.TransactionTableColumn color='grayFont'>{category}</S.TransactionTableColumn>
          <S.TransactionTableColumn color='grayFont'>{date}</S.TransactionTableColumn>
      </S.TransactionHistory>
      
    )
}

export default TransactionTable