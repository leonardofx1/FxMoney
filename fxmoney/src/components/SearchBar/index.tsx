import { MagnifyingGlass } from '@phosphor-icons/react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchSchema } from '../schema/schema';
import useContextTransaction from '../../context/useContextTransaction';

import { useEffect } from 'react';




const SearchBar = () => {
    const { getTransactionStorage, setTransaction, transaction} =  useContextTransaction()
    const {register, handleSubmit, watch} = useForm({
        resolver:zodResolver(searchSchema)
    }) 
    
  
    const handleSearchTransaction =({search}:{search:string})=> {
       
        setTransaction(transaction.filter((trans) => trans.category === search || trans.description === search))
    }
    const busca = watch('search')
    useEffect(()=> {
        busca?.length === 0 && getTransactionStorage('transaction')
    },[busca])
    return (
    
    <S.Form onSubmit={handleSubmit(handleSearchTransaction)}>
        <input type="text"  placeholder='Busque uma transação' {...register('search')}/>
        <button type='submit'>
        <MagnifyingGlass size={18} /> Buscar
        </button>

    </S.Form>
    )
}

export default SearchBar