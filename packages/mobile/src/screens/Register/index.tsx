import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Header,
  ContainerTitle,
  Title,
  ContainerInputs,
  TextInput,
  ContainerButton,
  Button,
  ButtonText 
} from './styles'

const Register: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
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
          placeholder='Nome'
          placeholderTextColor="#B7B7CC"
          // onFocus={handleInputFocus}
          // onBlur={handleInputBlur}
          // value={value}
          // {...rest}
        />

        <TextInput
          placeholder='E-mail'
          placeholderTextColor="#B7B7CC"
          // onFocus={handleInputFocus}
          // onBlur={handleInputBlur}
          // value={value}
          // {...rest}
        />

        <TextInput
          placeholder='Senha'
          placeholderTextColor="#B7B7CC"
          secureTextEntry
          // onFocus={handleInputFocus}
          // onBlur={handleInputBlur}
          // value={value}
          // {...rest}
        />
      </ContainerInputs>

      <ContainerButton>
        <Button>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </ContainerButton>
    </Container>
  )
}

export default Register
