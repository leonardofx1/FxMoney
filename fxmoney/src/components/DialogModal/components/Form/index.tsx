
import * as S from "./style";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";


const Form = () => {
 
  return (
    <>
      <S.FormContainer>
        <section>
          <input type="text" placeholder="Descrição" />
          <input type="text" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />
        </section>
        <S.RadioRoot>
          <S.RadioTransaction value="entry"> <ArrowCircleUp size={26}/>Entrada</S.RadioTransaction>
          <S.RadioTransaction value="exit"><ArrowCircleDown size={26}/> Saída</S.RadioTransaction>
        </S.RadioRoot>

        <section>
          <S.ButtonSubmit type="submit"> Cadastrar</S.ButtonSubmit>
        </section>
      </S.FormContainer>
    </>
  );
};

export default Form;
