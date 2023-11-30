import DialogModal from '../DialogModal';
import * as S from './style'

import * as Dialog from '@radix-ui/react-dialog';


const Header = () => {


    return (
        <S.Header>
            <S.HeaderContainer>
                <span>Fx Money</span>
               <Dialog.Root>
              
                <S.NewTransaction>Nova transação</S.NewTransaction>
                <DialogModal />

               </Dialog.Root>
            </S.HeaderContainer>
        </S.Header>
        
    )
}

export default Header