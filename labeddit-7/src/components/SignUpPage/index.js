import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

import { SignUpPageContainer,
         SignUpPageContent,
         InputContainer,
         Input,
         CadastroButton,
         Title } from './style';

function SignUpPage() {

const history = useHistory()

const mudarPagina = () => {
    history.push("/")
}

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const inputUsuario = event => {
    setUsuario(event.target.value);
  };

  const inputEmail = event => {
    setEmail(event.target.value);
  };

  const inputSenha = event => {
    setSenha(event.target.value);
  };

  const fazerCadastro = () => {
    const body = {
      email: email,
      password: senha,
      username: usuario
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
        body
      )
      .then(response => {
        localStorage.setItem("token", response.data.token)
        mudarPagina()
      })
      .catch(error => {
        alert('Usuário já cadastrado. Deseja fazer login?')
        history.push('/login')
      });
  };

  return (
    <SignUpPageContainer>
      <SignUpPageContent>
        <Title>Cadastro</Title>
        
        <InputContainer>
          <Input
            onChange={inputUsuario}
            value={usuario}
            type="text"
            placeholder="Nome de Usuario"
            required
          />
          <Input
            onChange={inputEmail}
            value={email}
            type="text"
            placeholder="E-mail"
            required
          />
          <Input
            onChange={inputSenha}
            value={senha}
            type="password"
            placeholder="Senha"
            required
          />
        </InputContainer>

        <CadastroButton onClick={fazerCadastro}>Cadastrar</CadastroButton>
    
      </SignUpPageContent>
    </SignUpPageContainer>
  );
}
export default SignUpPage;
