import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: #ffff00;
`

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
