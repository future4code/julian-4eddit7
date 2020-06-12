import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { NavBarContainer,
        SearchBar,
        Input,
        SearchButton,
        AllPostsButton,
        LogOutButton,
        LogoHorizontal } from './style';


function NavBar() {
    const [inputSearch, setInputSearch] = useState('');

    const history = useHistory();

    const handleLogOut = () => {
        alert('Deseja mesmo sair?')
        localStorage.clear();
        history.push('/login')
    }

    const onChangeInput = (e) => {
        setInputSearch(e.target.value)
    }

    //TODO fazer filtro de busca
    const filteredSearch = () => {
        
    }


    return (
        <NavBarContainer>

           <LogoHorizontal src='https://images2.imgbox.com/9a/da/CnbdMouA_o.png' />

            <SearchBar>
                <Input type='text' placeholder='O que está procurando?' value={inputSearch} onChange={onChangeInput}/>
                <SearchButton>Buscar</SearchButton>
            </SearchBar>

            <Link to={'/posts'}>
                <AllPostsButton>Todos os posts</AllPostsButton>
            </Link>

            <LogOutButton onClick={handleLogOut}>Sair</LogOutButton>

        </NavBarContainer>

    );
}

export default NavBar;
