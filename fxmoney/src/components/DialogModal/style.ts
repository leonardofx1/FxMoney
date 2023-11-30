import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { thema } from "../../style/thema";

export const DialogOverlay = styled(Dialog.Overlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const DialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  box-sizing: border-box;

  width: 536px;
  height: 520px;
  padding: 1.5rem;

  background-color: #202024;
  border-radius: ${thema.border.borderRadius};
`;
export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const DialogTitle = styled(Dialog.Title)`
  width: 100%;

  color: ${thema.colors.grayFont};
`;
