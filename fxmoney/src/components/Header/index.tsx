import { useState } from 'react';
import DialogModal from '../DialogModal';
import * as S from './style'

import * as Dialog from '@radix-ui/react-dialog';


const Header = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <S.Header>
            <S.HeaderContainer>
                <span>Fx Money</span>
               <Dialog.Root open={open} onOpenChange={setOpen}>
      
                <S.NewTransaction>Nova transação</S.NewTransaction>
                <DialogModal setOpen={setOpen}/>

               </Dialog.Root>
            </S.HeaderContainer>
        </S.Header>
        
    )
}

export default Header