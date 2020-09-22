import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'

import { 
  Container, 
  ContainerImage, 
  Image,
  ContainerText,
  Title,
  SubTitle, 
  ContainerButton,
  Button, 
  ButtonText 
} from './styles'

import people from '../../assets/people.png'

const Home: React.FC = () => {
  const navigation = useNavigation();

  async function handleRegister(): Promise<void> {
    navigation.navigate('Register')
  }

  return (
    <Container>
      <ContainerImage>
        <Image source={people} />
      </ContainerImage>

      <ContainerText>
        <Title>Cadastro.now</Title>
        <SubTitle>Seu app para cadastrar clientes de forma rapida!</SubTitle>
      </ContainerText>

      <ContainerButton>
        <Button onPress={handleRegister}>
          <ButtonText>Ir para o cadastro</ButtonText>
          <Icon 
            name='log-in' 
            size={25}
            color='#fff'
          />
        </Button>
      </ContainerButton>
    </Container>
  )
}

export default Home
