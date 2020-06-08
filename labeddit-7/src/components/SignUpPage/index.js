import React from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <div>
      <h3>Página de cadastro</h3>
      <input
        type='text'
        placeholder='Insira seu nome de usuário'
        required
      />

      <input
        type='text'
        placeholder='Insira o seu e-mail'
      />

      <input
        type='password'
        placeholder='Insira sua senha'
      />

      <Link to={'/'}>
        <button onClick={''}>Cadastrar</button>
      </Link>
    </div>
  );
}

export default SignUpPage;