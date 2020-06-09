import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FormItem from '../FormItem';
import CardPost from '../CardPost';

const FeedPageContainer = styled.div`
  margin: 0px;
  width: 100%;
  height: 100vh;
`

const FeedPageContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: aliceblue;
`

const FeedPostContent = styled.div`
  width: 80%;
  height: auto;
`

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

function FeedPage() {
  return (
    <FeedPageContainer>

      <NavBarContainer>

        <SearchBar>
          <Input type='text' placeholder='O que está procurando?' />
          <SearchButton>Buscar</SearchButton>
        </SearchBar>

        <Link to={'/posts'}>
          <AllPostsButton>Todos os posts</AllPostsButton>
        </Link>

      </NavBarContainer>

      <FeedPageContent>

        <FeedPostContent>

          <h2>Feed</h2>

          <FormItem />


          <CardPost />

          <CardPost />

          <CardPost />

        </FeedPostContent>

      </FeedPageContent>


    </FeedPageContainer>
  );
}

export default FeedPage;