import React from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import Input from '../../components/Input'

import { Container, Content, Background } from  './styles'
import { Form } from '@unform/web'

import people from '../../assets/images/people.png'

const Landing: React.FC = () => {

  function handleSubmit(data: object): void{
    console.log(data)
  }

  return(
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Realizar cadastro</h1>

          <Input name='name' icon={FiUser} placeholder='Nome' />
          <Input name='email' icon={FiMail} placeholder='E-mail' />
          <Input name='password' icon={FiLock} type='password' placeholder='Senha' />

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>

      <Background>
        <img src={people} alt="Cadastro.now"/>
        <h1>Cadastro.now</h1>
        <h2>Seu app para cadastrar clientes de forma rapida!</h2>
      </Background>
    </Container>
  )
}

export default Landing;