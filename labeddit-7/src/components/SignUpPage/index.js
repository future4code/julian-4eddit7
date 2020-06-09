import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom"

const SignUpPageContainer = styled.div`
  margin: 0;
`;

const SignUpPageContent = styled.div`
  border: 1px outset grey;
  padding: 35px;
  border-radius: 25px;
  width: 255px;
  height: 330px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 25px;
  border: 1px solid grey;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CadastroButton = styled.button`
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
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
`;


function SignUpPage() {

const history = useHistory()

const mudarPagina = () => {
    history.push("/posts")
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
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        mudarPagina()
      })
      .catch(error => {
        console.log(error.response.data);
        alert('usuario ja cadastrado')
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
          />
          <Input
            onChange={inputEmail}
            value={email}
            type="text"
            placeholder="Email"
          />
          <Input
            onChange={inputSenha}
            value={senha}
            type="password"
            placeholder="Senha"
          />
        </InputContainer>

        <CadastroButton onClick={fazerCadastro}>Cadastrar</CadastroButton>
      </SignUpPageContent>
    </SignUpPageContainer>
  );
}
export default SignUpPage;
