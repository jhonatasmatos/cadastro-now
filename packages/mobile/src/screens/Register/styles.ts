import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Header = styled.View`
  flex-direction: row;
  height: 56px;
  align-items: center;
  justify-content: space-between;

  padding-top: 36px;
`

export const ContainerTitle = styled.View`
  flex: 1;
  margin-top: 18px;
`

export const Title = styled.Text`
  line-height: 52px;
  font-size: 32px;
  font-weight: bold;
  color: #333;
`

export const ContainerInputs = styled.View`
  flex: 2;
  margin-bottom: 36px;
  align-items: center;
`

export const TextInput = styled.TextInput`
  margin-bottom: 12px;
  padding-left: 10px;

  width: 100%;
  height: 56px;
  border-radius: 10px;

  font-size: 16px;
  color: #fff;
  background-color: #333;
`;

export const ContainerButton = styled.View`
  flex: 1;
  margin-top: 36px;
  align-items: center;
`

export const Button = styled(RectButton)`
  height: 56px;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #333;
 `

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`
export const Modal = styled.Modal``

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #000000aa;
`

export const ModalContent = styled.View`
  width: 260px;
  height: 360px;
  justify-content: center;
  align-items: center;

  padding: 0 16px;

  background-color: #fff;
`

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
`

export const ModalText = styled.Text`
font-size: 16px;
text-align: center;

padding-top: 16px;
`

export const ModalButton = styled(RectButton)`
width: 100%;
height: 52px;

justify-content: center;
align-items: center;

background-color: #333;

margin-top: 36px;
`

export const ModalButtonText = styled.Text`
font-size: 16px;
font-weight: 500;

color: #ffff00;

`