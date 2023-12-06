import { createContext,  useState } from "react";
import { TrasactionType } from '../@types/types';


type TrasactionContextType = {
    transaction: TrasactionType[] | null
    setTransactionStorage: (newTransaction: TrasactionType) => void
    getTransactionStorage: (arg:string) => void
}

export const transactionContext = createContext<TrasactionContextType | null>(null)

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const [transaction, setTransaction] = useState<TrasactionType[] | null>(null)

    const getTransactionStorage = (key:string) => {
       
        const getTransaction:TrasactionType[] = JSON.parse(localStorage.getItem(key)!)
        getTransaction !== null && setTransaction(getTransaction)
      
    }
    const setTransactionStorage = (newTransaction: TrasactionType) => {


        const historyTransaction = localStorage.getItem('transaction')

        if (historyTransaction !== null) {
            const existingTransactions = JSON.parse(historyTransaction);
            existingTransactions.push(newTransaction);

            setTransaction(existingTransactions)


            const updatedTransactions = JSON.stringify(existingTransactions);
            localStorage.setItem('transaction', updatedTransactions);
        } else {
            localStorage.setItem('transaction', JSON.stringify([newTransaction]));
            getTransactionStorage('transaction')
        }



    }


    return (
        <transactionContext.Provider value={{ setTransactionStorage, transaction, getTransactionStorage}}>
            {children}
        </transactionContext.Provider>
    )
}
