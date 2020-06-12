import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { LoginPageContainer,
         LoginPageContent,
         InputContainer,
         Input,
         LoginButton,
         SignUpButton,
         LeftContainer,
         LogoLabeddit,
         Title } from './style';

function LoginPage() {

  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token");
    token === null ? history.push("/login") : history.push("/")
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

      <LeftContainer>
        <Title>Faça parte da comunidade mais querida da internet!</Title>
        <LogoLabeddit src='https://i.imgur.com/ICPUGXs.png' alt='logo labeddit' />
      </LeftContainer>

      <LoginPageContent>

        <h2>Login</h2>

        <InputContainer>
          <Input onChange={inputEmail} value={email} type='text' placeholder='E-mail' />
          <Input onChange={inputSenha} value={senha} type='password' placeholder='Senha' />
        </InputContainer>

        <LoginButton onClick={fazerLogin}>Entrar</LoginButton>

        <p>Novo por aqui? Cadastre-se</p>

        <Link to={'/signup'}>
          <SignUpButton>Cadastrar</SignUpButton>
        </Link>

      </LoginPageContent>
    </LoginPageContainer>
  );
}

export default LoginPage;