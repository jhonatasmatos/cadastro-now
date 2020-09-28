import React, { useCallback, useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native';

import Icon from 'react-native-vector-icons/Feather'

import axios from '@monorepo-register-user/axios-config'

import {
  Header,
  ContainerTitle,
  Title,
  ContainerInputs,
  TextInput,
  ContainerButton,
  Button,
  ButtonText,
  Modal,
  ModalView,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalButton,
  ModalButtonText
} from './styles'

import success from '../../assets/success.json'

interface User {
  name: string;
  email: string;
}

const Register: React.FC = () => {
  const navigation = useNavigation()

  const { goBack } = useNavigation()
  const [user, setUser] = useState({} as User)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = useCallback(
    async () => {
      try {
        const response = await axios.post('/users', {
          name: name,
          email: email,
          password: password
        })
        
        if(response.status === 201){
          setUser(response.data)
          setIsOpen(true)
        }
      } catch (error) {
        console.log(error)
      }
    },
    [name, email, password],
  );

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)

    setName('')
    setEmail('')
    setPassword('')

    navigation.navigate('Home')
  }, [setIsOpen])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#ffff00', paddingLeft: 16, paddingRight: 16 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Header>
        <Icon 
          name='arrow-left' 
          size={25}
          color='#333'
          onPress={() => goBack() }
        />
      </Header>

      <ContainerTitle>
        <Title>Cadastar usuários</Title>
      </ContainerTitle>

      <ContainerInputs>
        <TextInput
          value={name}
          placeholder='Nome'
          placeholderTextColor='#B7B7CC'
          onChangeText={e => setName(e)}
        />

        <TextInput
          value={email}
          placeholder='E-mail'
          placeholderTextColor='#B7B7CC'
          onChangeText={e => setEmail(e)}
          autoCapitalize='none'
        />

        <TextInput
          value={password}
          placeholder='Senha'
          placeholderTextColor='#B7B7CC'
          secureTextEntry
          onChangeText={e => setPassword(e)}
        />
      </ContainerInputs>

      <ContainerButton>
        <Button onPress={handleSubmit}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </ContainerButton>

      <Modal
        animationType='slide'
        transparent={true}
        visible={isOpen}
        onRequestClose={handleCloseModal}
      >
        <ModalView>
          <ModalContent>
            <Lottie style={{
              width: 120,
              height: 120
            }} source={success} autoPlay loop />
            <ModalTitle>Parabéns ;)</ModalTitle>
            <ModalText>{user.name}, foi registrado com sucesso</ModalText>

            <ModalButton onPress={handleCloseModal}>
              <ModalButtonText>Ok!</ModalButtonText>
            </ModalButton>
          </ModalContent>
        </ModalView>
      </Modal>
    </KeyboardAvoidingView>
  )
}

export default Register
