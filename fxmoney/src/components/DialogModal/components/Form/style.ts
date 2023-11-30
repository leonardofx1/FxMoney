import styled from "styled-components";
import { thema } from "../../../../style/thema";

import * as Radio from "@radix-ui/react-radio-group";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 1rem;
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  gap: 2rem;
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 80%;
  }
  input {
    width: 90%;

    background-color: ${thema.colors.gray};
    padding: 1.2rem;
    border: none;
    border-radius: 8px;
    &:placeholder {
      color: red;
    }

    outline-color: ${thema.colors.gray};
    outline-width: .1px;
  }
`;
export const RadioRoot = styled(Radio.Root)`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const RadioTransaction = styled(Radio.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${thema.colors.grayFont};
  font-weight: 500;
  font-size: 1.2rem;

  width: 100%;
  max-width: 258px;
  height: 58px;

  border: none;
  border-radius: ${thema.border.borderRadius};
  background-color: #29292e;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 58px;

  background-color: ${thema.colors.green};

  border: none;

  border-radius: ${thema.border.borderRadius};

  color: white;
  font-size: 1.5rem;
`;
