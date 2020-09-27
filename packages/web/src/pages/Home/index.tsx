import React, { useState, useEffect, useCallback } from 'react'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import axios from '@monorepo-register-user/axios-config'

import Input from '../../components/Input'

import { Container, SuccessContent, Content, Background } from  './styles'
import { Form } from '@unform/web'

import people from '../../assets/images/people.png'

interface User {
  name: string;
  email: string;
}

const Landing: React.FC = () => {
  const[isSuccess, setIsSuccess] = useState(true)
  const [user, setUser] = useState({} as User)

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        const response = await axios.post('/users', data)
        
        if(response.status === 201){
          setUser(response.data)
          setIsSuccess(true)
        }
      } catch (error) {
        console.log(error)
      }
    },
    [setUser, setIsSuccess],
  );

  const handleGoBack = useCallback(() => {
    setIsSuccess(false)
  },[setIsSuccess]);

  return(
    <Container>
    {isSuccess ? (
      <SuccessContent>
        <Form onSubmit={handleGoBack}>
          <h1>Parabéns ;)</h1>
          <h2>{user.name} foi registrado com sucesso</h2>

          <button type="submit" onSubmit={handleGoBack}>Voltar</button>
        </Form>
      </SuccessContent>
    ) : (
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Realizar cadastro</h1>

          <Input name='name' icon={FiUser} placeholder='Nome' />
          <Input name='email' icon={FiMail} placeholder='E-mail' />
          <Input name='password' icon={FiLock} type='password' placeholder='Senha' />

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    ) }
      <Background>
        <img src={people} alt="Cadastro.now"/>
        <h1>Cadastro.now</h1>
        <h2>Seu app para cadastrar clientes de forma rapida!</h2>
      </Background>
    </Container>
  )
}

export default Landing;