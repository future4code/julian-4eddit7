import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useHistory } from "react-router-dom"


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

  const history = useHistory()
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    token===null? history.push("/login") :  history.push("/") 
  }, [history]);


  const mudarPagina = () => {
    history.push("/")
}

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  const inputEmail = (event) => {
    setEmail(event.target.value)
}

  const inputSenha = (event) => {
    setSenha(event.target.value)
}
  

  const fazerLogin = () => {
    const body = {
      email: email,
      password: senha
    };
  
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
        body
      )
      .then(response => {
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        mudarPagina()
      })
      .catch(error => {
        console.log(error.response)
        alert('email ou senha invalidos')
      });
  }


  return (
    <LoginPageContainer>

      <LoginPageContent>

       
          <Title>Login</Title>

          <InputContainer>
            <Input onChange={inputEmail} value={email} type='text' placeholder='Email' />
            <Input onChange={inputSenha} value={senha} type='password' placeholder='Senha' />
          </InputContainer>

            <LoginButton onClick={fazerLogin}>Entrar</LoginButton>
 
          <p>Ainda não é cadastrado? Inscreva-se</p>
          
          <Link to={'/signup'}>
          <SignUpButton>Cadastrar</SignUpButton>    
          </Link>
       
      </LoginPageContent>
    </LoginPageContainer>
  );
}

export default LoginPage;