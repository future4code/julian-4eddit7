import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: cadetblue;
  padding: 15px;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  align-items: center;
`

export const SearchBar = styled.div`
`

export const Input = styled.input`
  padding: 5px;
  border-radius: 25px;
  border: 1px solid grey;
`

export const SearchButton = styled.button`
  padding: 5px;
  border: 1px outset cadetblue;
  background-color: #DEDEDE;
  border-radius: 10px;
  margin-left: 10px;
    
  :hover {
    cursor: pointer};
`


export const AllPostsButton = styled.button`
  padding: 7px;
  border: 1px outset grey;
  background-color: darkorange;
  border-radius: 10px;
  margin-left: 10px;

  :hover {
    cursor: pointer};
`

export const LogOutButton = styled.button`
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid grey;
    color: grey;
`

export const LogoHorizontal = styled.img`
    width: 12%;
`