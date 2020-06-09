import React from 'react';
import styled from 'styled-components';

const FormItemContainer = styled.div`
  border: 1px solid #DEDEDE;
  width: 70%;
  padding: 20px;
  background-color: white;
  margin-bottom: 10px;
`

const FormItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  border-radius: 15px;
  border: 1px solid #DEDEDE;
  width: 70%;
  height: 50px;
  background-color: #f5f5f5;
  margin-right: 20px;
  font-size: 15px;
`
  
const IconUser = styled.img`
  margin-right: 20px;
  border-radius: 100px;
`

const Button = styled.button`
  border: none;
  background-color: cadetblue;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;

  :hover {
    cursor: pointer;
  }
`

function FormItem() {
  return (
    <FormItemContainer>

      <FormItemContent>

        <IconUser src='https://picsum.photos/id/237/20/30' />

        <Input
          type='text'
          placeholder='Criar post'
        />

        <Button onClick={''}>Postar</Button>

      </FormItemContent>

    </FormItemContainer>
  );
}

export default FormItem;