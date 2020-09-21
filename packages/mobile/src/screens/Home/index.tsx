import React from 'react'

import { 
  Container, 
  ContainerImage, 
  Image,
  ContainerText,
  Title,
  SubTitle, 
  ContainerButton,
  Button, 
  Buttonext 
} from './styles'

import people from '../../assets/people.png'

const Home: React.FC = () => {
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
        <Button>
          <Buttonext>Cadastrar</Buttonext>
        </Button>
      </ContainerButton>
    </Container>
  )
}

export default Home
