import { thema } from "../../style/thema";
import * as S from "./style";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";

const Transaction = () => {
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
    </S.TransactionContainer>
  );
};

export default Transaction;
