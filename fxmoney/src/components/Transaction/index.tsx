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
import { TransactionType } from "../../@types/types";

import useSummaryTransaction from "../hooks/reducerTransactionPrice";
import { formatCurrency } from "../../utils/formatDatePrice";

import Footer from "../Footer";

const Transaction = () => {
  const { transaction, getTransactionStorage } =
    useContext(transactionContext)!;
  const { sumTransaction } = useSummaryTransaction();
  useEffect(() => {
    getTransactionStorage("transaction");
    sumTransaction("entry");
  }, []);

  return (
    <S.TransactionContainer>
      <S.SummaryContainer>
        <S.TransactionSummary>
          <S.TransactionIcon>
            <span>Entradas</span>{" "}
            <ArrowCircleDown size={38} color={thema.colors.green} />
          </S.TransactionIcon>
          <S.Money>{formatCurrency(sumTransaction("entry"))}</S.Money>
        </S.TransactionSummary>
        <S.TransactionSummary>
          <S.TransactionIcon>
            <span>Saida</span>
            <ArrowCircleUp size={38} color={thema.colors.redDark} />
          </S.TransactionIcon>
          <S.Money>{formatCurrency(sumTransaction("exit"))}</S.Money>
        </S.TransactionSummary>
        <S.TransactionSummary color="green">
          <S.TransactionIcon>
            <span>Total</span>
            <CurrencyDollar size={32} color={thema.colors.money} />
          </S.TransactionIcon>
          <S.Money>{formatCurrency(sumTransaction("total"))}</S.Money>
        </S.TransactionSummary>
      </S.SummaryContainer>
      <S.TransactionTable>
        <SearchBar />

        <tbody>
          {transaction !== null &&
            transaction.map((transaction: TransactionType) => (
              <TransactionTable {...transaction} />
            ))}
        </tbody>
      </S.TransactionTable>
      <Footer />
    </S.TransactionContainer>
  );
};

export default Transaction;
