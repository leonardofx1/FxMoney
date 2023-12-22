import { TransactionType } from "../../@types/types";
import { formatCurrency } from "../../utils/formatDatePrice";

import { v4 as uuidv4 } from 'uuid';

import * as S from "./styles";

const TransactionTable = ({
    description,
    price,
    category,
    date,
    type,
}: TransactionType) => {
    return (
        <S.TransactionHistory key={uuidv4()}>
            <S.TransactionTableColumn color="grayFont">
                {description}
            </S.TransactionTableColumn>

            <S.TransactionTablePrice variant={type}>
                {type === "exit" && "-"} {formatCurrency(price)}
            </S.TransactionTablePrice>
            <S.TransactionTableColumn color="grayFont">
                {category}
            </S.TransactionTableColumn>
            <S.TransactionTableColumn color="grayFont">
                {date}
            </S.TransactionTableColumn>
        </S.TransactionHistory>
    );
};

export default TransactionTable;
