import React, { useState } from 'react';
import axios from 'axios';
import { FormItemContainer,
         FormItemContent,
         InputText,
         InputTitle,
         InputContainer,
         IconUser,
         Button } from './style';

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