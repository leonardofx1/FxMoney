import {useContext} from 'react';
import Transaction from '../Transaction/index';
import { transactionContext } from '../../context/TransactionProvider';
import { TransactionType } from '../../@types/types';

type useSummaryTransactionType = {
    someTransaction: (type:string) => number
}

const useSummaryTransaction =():useSummaryTransactionType => {
    const { transaction} = useContext(transactionContext)!


const someTransaction = (typeTransaction:string):number => {
   
    const some:number = transaction?.reduce((acc: number, transaction:TransactionType) => {
       
        acc = transaction.price
           
            return acc
    }, 0)

    return some
} 
return {someTransaction}
    

}

export default useSummaryTransaction