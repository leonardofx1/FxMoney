import { MagnifyingGlass } from '@phosphor-icons/react';
import * as S from './style';


const SearchBar = () => {


    return (
    
    <S.Form>
        <input type="text"  placeholder='Busque uma transação'/>
        <button>
        <MagnifyingGlass size={18} /> Buscar
        </button>

    </S.Form>
    )
}

export default SearchBar