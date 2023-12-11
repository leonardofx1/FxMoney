
import { Controller, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./style";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import { TransactionType, schema } from '../../../../@types/types';
import useContextTransaction from "../../../../context/useContextTransaction";

const Form = () => {

  const {setTransactionStorage} = useContextTransaction()
  const { register, control, handleSubmit, formState:{isValid} } = useForm({
    resolver: zodResolver(schema),
    mode:'onChange'
  });
  const handleAddTransaction = (values: FieldValues) => {
    const value: TransactionType = {
      description: values.description,
      price: values.price,
      type: values.type,
      date: values.date,
      category: values.category,
    };
    setTransactionStorage(value);
  };
  

  return (
    <>
      <S.FormContainer onSubmit={handleSubmit(handleAddTransaction)}>
        <section>
          <input type="text" placeholder="Descrição" {...register('description')} />
          <input type="text" placeholder="Preço" {...register('price')} />
          <input type="text" placeholder="Categoria" {...register('category')} />
        </section>
        <Controller
          name="type"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <S.RadioRoot onValueChange={value => { field.onChange(value);  }}>
              <S.RadioTransaction value="entry"><ArrowCircleUp size={26} />Entrada</S.RadioTransaction>
              <S.RadioTransaction value="exit"><ArrowCircleDown size={26} />Saída</S.RadioTransaction>
            </S.RadioRoot>
          )}
        />
        <section>
    
        <S.ButtonSubmit  disabled={!isValid}>Cadastrar</S.ButtonSubmit>
       </section>
      </S.FormContainer>
    </>
  );
};

export default Form;
