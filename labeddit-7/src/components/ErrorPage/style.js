import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
  margin: 0;
  width: 100%;
`

export const ErrorPageContent = styled.div`
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonGoBackFeed = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
  background-color: cadetblue;
  border: none;
  position: relative;
  margin-bottom: 100px;

  :hover {
    font-weight: bolder;
  }
`

export const Title = styled.h2`
  color: darkorange;
`

export const CatGif404 = styled.img`
  width: 40%;
`