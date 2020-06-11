import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  const useForm = initialValues => {
    const [form, setForm] = useState(initialValues)

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  return { form, onChange }
  }

  const { form, onChange } = useForm({
    text: '',
    title: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleInputChange = e => {
    const { value, name } = e.target
    onChange(name, value)
  }

  const createPost = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', form, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': localStorage.getItem('token')
      }
    }).then(response => {
      console.log(response.data)

    }).catch(error => {
      console.log('deu erro...', error.data)
    })
  }

  return (
    <FormItemContainer>

      <FormItemContent>

        <IconUser src='https://images2.imgbox.com/59/ef/lwVsBQOW_o.png' />

        <InputContainer>

        <form onSubmit={handleSubmit}>

          <InputTitle
            name='title'
            value={form.title}
            onChange={handleInputChange}
            type='text'
            placeholder='Dê um título ao post'
            required
          />

          <InputText
            name='text'
            value={form.text}
            onChange={handleInputChange}
            type='text'
            placeholder='No que está pensando?'
            required
          />

        </form>

        </InputContainer>

        <Button onClick={createPost}>Postar</Button>

      </FormItemContent>

    </FormItemContainer>
  );
}

export default FormItem;