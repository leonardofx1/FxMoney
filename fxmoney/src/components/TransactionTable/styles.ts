import styled from "styled-components";
import { thema } from "../../style/thema";

export const TransactionHistory = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${thema.colors.grayLigth};
  width: 100%;
  border-radius: ${thema.border.borderRadius};

  padding: 1.5rem;

  gap: 0.2rem;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0;
    margin: 0.5rem;

  }
`;
type ColorProps = {
  color: "green" | "redDark" | "grayFont";
};

export const TransactionTableColumn = styled.td<ColorProps>`
  color: ${(props) => thema.colors[props.color]};
  min-width: 150px;
  width: 100%;
  &:nth-child(2) {
    font-weight: bold;
    font-size: 1.2rem;
  }

  &:last-child {
    text-align: end;
  }
`;
type PriceProps = { variant: string };
export const TransactionTablePrice = styled.td<PriceProps>`
  min-width: 150px;
  width: 100%;
  color: ${(props) =>
    props.variant === "entry" ? thema.colors.green : thema.colors.redDark};
`;
