import { thema } from "../../style/thema";
import * as S from "./style";
import TransactionTable from "../TransactionTable";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";
import SearchBar from "../SearchBar";
import { transactionContext } from "../../context/TransactionProvider";
import { useContext, useEffect } from "react";

const Transaction = () => {
  const{ transaction, getTransactionStorage} = useContext(transactionContext)!

  useEffect(() => {
      getTransactionStorage('transaction')
     
 
  },[])

  return (
    <S.TransactionContainer>
      <S.TransactionSummary>
        <S.TransactionIcon>
          <span>Entradas</span>{" "}
          <ArrowCircleDown size={38} color={thema.colors.green} />
        </S.TransactionIcon>
        <S.Money>215314</S.Money>
      </S.TransactionSummary>
      <S.TransactionSummary>
        <S.TransactionIcon>
          <span>Saida</span>
          <ArrowCircleUp size={38} color={thema.colors.redDark} />
        </S.TransactionIcon>
        <S.Money>215314</S.Money>
      </S.TransactionSummary>
      <S.TransactionSummary color="green">
        <S.TransactionIcon>
          <span>Total</span>
          <CurrencyDollar size={32} color={thema.colors.money} />
        </S.TransactionIcon>
        <S.Money>215314</S.Money>
      </S.TransactionSummary>
      <SearchBar />
      <S.TransactionTable>
        <tbody>
      {
        transaction !== null  && transaction.map(() => <TransactionTable/>)
      }
                           
        </tbody>
      </S.TransactionTable>
      
    </S.TransactionContainer>
  );
};

export default Transaction;
