import {useContext} from 'react'
import { transactionContext, TransactionContextType } from './TransactionProvider';


const useContextTransaction = () => {
const { setTransactionStorage, transaction, getTransactionStorage, setTransaction} = useContext(transactionContext) as TransactionContextType



    return { setTransactionStorage, transaction, getTransactionStorage, setTransaction}
}

export default useContextTransaction