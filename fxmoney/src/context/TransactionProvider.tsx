import { createContext,  useState } from "react";
import {  TransactionType } from '../@types/types';


export type TransactionContextType = {
    transaction: TransactionType[] 
    setTransactionStorage: (newTransaction:  TransactionType) => void
    getTransactionStorage: (arg:string) => void
    setTransaction: (state:TransactionType[] | TransactionType) => void
}

export const transactionContext = createContext<TransactionContextType | null>(null)

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const [transaction, setTransaction] = useState< TransactionType[] | []>([])

    const getTransactionStorage = (key:string) => {
       
        const getTransaction: TransactionType[] = JSON.parse(localStorage.getItem(key)!)
        getTransaction !== null && setTransaction(getTransaction)
      
    }
    const setTransactionStorage = (newTransaction:TransactionType) => {


        const historyTransaction = localStorage.getItem('transaction')

        if (historyTransaction !== null) {
            const existingTransactions = JSON.parse(historyTransaction);
            existingTransactions[existingTransactions.length] = newTransaction

            setTransaction(existingTransactions)


            const updatedTransactions = JSON.stringify(existingTransactions);
            localStorage.setItem('transaction', updatedTransactions);
        } else {
            localStorage.setItem('transaction', JSON.stringify([newTransaction]));
            getTransactionStorage('transaction')
        }



    }


    return (
        <transactionContext.Provider value={{ setTransactionStorage, transaction, getTransactionStorage, setTransaction}}>
            {children}
        </transactionContext.Provider>
    )
}
