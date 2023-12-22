import { createContext, useState, Dispatch, SetStateAction } from "react";
import { TransactionType } from '../@types/types';

export type TransactionContextType = {
    transaction: TransactionType[] 
    setTransactionStorage: (newTransaction:  TransactionType) => void
    getTransactionStorage: (arg:string) => void
    setTransaction: Dispatch<SetStateAction<TransactionType[]>>
}

export const transactionContext = createContext<TransactionContextType | null>(null)

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const [transaction, setTransaction] = useState<TransactionType[]>([]);

    const getTransactionStorage = (key:string) => {
        const getTransaction: TransactionType[] | null = JSON.parse(localStorage.getItem(key)!) || null;
        getTransaction && setTransaction(getTransaction);
    }

    const setTransactionStorage = (newTransaction:TransactionType) => {
        const historyTransaction = JSON.parse(localStorage.getItem('transaction')!) || [];

        const existingTransactions = [...historyTransaction, newTransaction];
        setTransaction(existingTransactions);

        const updatedTransactions = JSON.stringify(existingTransactions);
        localStorage.setItem('transaction', updatedTransactions);
    }

    return (
        <transactionContext.Provider value={{ setTransactionStorage, transaction, getTransactionStorage, setTransaction }}>
            {children}
        </transactionContext.Provider>
    )
}
