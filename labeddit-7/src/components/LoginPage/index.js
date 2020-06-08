import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const LoginPageContainer = styled.div`
  margin: 0;
`

const LoginPageContent = styled.div`
  border: 1px outset grey;
  padding: 35px;
  border-radius: 25px;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Input = styled.input`
  padding: 10px;
  border-radius: 25px;
  border: 1px solid grey;
  margin-top: 10px;
  margin-bottom: 10px;
`

const LoginButton = styled.button`
  padding: 10px;
  border: 1px solid cadetblue;
  color: cadetblue;
  border-radius: 25px;
  margin-top: 10px;
  margin-bottom: 10px;

  :hover {
    font-weight: bolder;
    color: white;
    background-color: cadetblue;
    cursor: pointer;
  }
`

const SignUpButton = styled.button`
  padding: 10px;
  font-weight: bolder;
  color: white;
  background-color: cadetblue;  
  border-radius: 25px;
  border: none;
  
  :hover {
    cursor: pointer;
    background-color: white;
    border: 1px solid cadetblue;
    color: cadetblue;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
`

function LoginPage() {
  return (
    <LoginPageContainer>

      <LoginPageContent>

        <form onSubmit={''}>

          <Title>Login</Title>

          <InputContainer>
            <Input type='text' placeholder='Email' />
            <Input type='password' placeholder='Senha' />
          </InputContainer>

          <Link to={'/'}>
            <LoginButton onClick={''}>Entrar</LoginButton>
          </Link>


          <p>Ainda não é cadastrado? Inscreva-se</p>
          
          <Link to={'/signup'}>
          <SignUpButton>Cadastrar</SignUpButton>    
          </Link>

        </form>

      </LoginPageContent>
    </LoginPageContainer>
  );
}

export default LoginPage;