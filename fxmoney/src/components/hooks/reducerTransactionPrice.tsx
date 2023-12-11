import {useContext} from 'react';

import { transactionContext } from '../../context/TransactionProvider';
import { TransactionType } from '../../@types/types';

type useSummaryTransactionType = {
    sumTransaction: (type:string) => number
}

const useSummaryTransaction =():useSummaryTransactionType => {
    const { transaction} = useContext(transactionContext)!


const sumTransaction = (typeTransaction:string = 'total'):number => {
   
    const sum:number = transaction?.reduce((acc: number, trans:TransactionType):number => {
        if(typeTransaction === trans.type){
           return  acc += trans.price
        }else if (typeTransaction === 'total'){
            return acc = trans.type === 'exit'? acc - trans.price : acc + trans.price
        }
            
        
        return acc
    }, 0)

    return sum
} 
return {sumTransaction}
    

}

export default useSummaryTransaction