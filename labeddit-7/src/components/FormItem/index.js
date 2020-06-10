import React from 'react';
import styled from 'styled-components';

const FormItemContainer = styled.div`
  border: 1px solid #DEDEDE;
  width: 70%;
  padding: 20px;
  background-color: white;
  margin-bottom: 30px;
`

const FormItemContent = styled.div`
  display: flex;
  //flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const InputText = styled.input`
  border-radius: 15px;
  border: 1px solid #DEDEDE;
  width: 90%;
  height: 50px;
  background-color: #f5f5f5;
  font-size: 15px;
`

const InputTitle = styled.input`
  border-radius: 15px;
  border: 1px solid #DEDEDE;
  background-color: #f5f5f5;
  font-size: 15px;
  width: 90%;
  height: 20px;
  margin-bottom: 10px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`
  
const IconUser = styled.img`
  padding-right: 15px;
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

        <IconUser src='https://images2.imgbox.com/59/ef/lwVsBQOW_o.png' />

        <InputContainer>
        
          <InputTitle
            type='text'
            placeholder='Título'
          />

          <InputText
            type='text'
            placeholder='Criar post'
          />
        
        </InputContainer>

        <Button onClick={''}>Postar</Button>

      </FormItemContent>

    </FormItemContainer>
  );
}

export default FormItem;