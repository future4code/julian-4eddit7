import styled from 'styled-components';

export const SignUpPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: url('https://i.pinimg.com/originals/8b/5f/e3/8b5fe37c678362311c0617affbf32994.jpg');
  background-size: cover;
`

export const SignUpPageContent = styled.div`
  border: 1px outset grey;
  padding: 35px;
  border-radius: 25px;
  flex-wrap: wrap;
  width: 25%;
  height: 50vh;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: black 0.5em 0.5em 0.3em;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 25px;
  border: 1px solid grey;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const CadastroButton = styled.button`
  padding: 10px;
  border: 1px solid cadetblue;
  color: cadetblue;
  border-radius: 25px;
  margin-top: 10px;
  margin-bottom: 10px;

  :hover {
    font-weight: bolder;
    color: cadetblue;
    background-color: white;
    cursor: pointer;
  }
`

export const Title = styled.h2`
  display: flex;
  justify-content: center;
`