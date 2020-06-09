import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: cadetblue;
  padding: 15px;
  justify-content: space-evenly;
  border-bottom: 2px solid grey;
`

const SearchBar = styled.div`
`

const Input = styled.input`
  padding: 5px;
  border-radius: 25px;
  border: 1px solid grey;
`

const SearchButton = styled.button`
  padding: 5px;
  border: 1px outset cadetblue;
  background-color: #DEDEDE;
  border-radius: 10px;
  margin-left: 10px;

  :hover {
    cursor: pointer;
`

const AllPostsButton = styled.button`
  padding: 7px;
  border: 1px outset grey;
  background-color: darkorange;
  border-radius: 10px;
  margin-left: 10px;

  :hover {
    cursor: pointer;
`

const LogOutButton = styled.button`
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid grey;
    color: grey;
`

function NavBar() {
    const history = useHistory();

    const handleLogOut = () => {
        localStorage.clear();
        history.push('/login')
    }

    return (
        <NavBarContainer>

            <SearchBar>
                <Input type='text' placeholder='O que está procurando?' />
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
