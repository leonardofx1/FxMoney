import * as Dialog from '@radix-ui/react-dialog';
import * as S from './style'
import { X } from '@phosphor-icons/react';
import { thema } from '../../style/thema';
import Form from './components/Form';


const DialogModal = () => {



    return (
        <Dialog.Portal>
        <S.DialogOverlay>
            <S.DialogContent>
                <S.DialogClose asChild>
                <X size={26} color={thema.colors.grayFont}/>
                </S.DialogClose>
                <S.DialogTitle>
                    Transação
                </S.DialogTitle>
                <Form />
            </S.DialogContent>
        </S.DialogOverlay>
    </Dialog.Portal>
    )
}

export default DialogModal