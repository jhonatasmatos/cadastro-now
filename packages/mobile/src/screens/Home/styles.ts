import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffff00;
`

export const ContainerImage = styled.View`
  flex: 1;
  margin-top: 48px;
  align-items: center;
`

export const Image = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 75px;
`

export const ContainerText = styled.View`
  flex: 1;
  margin-top: 48px;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #333;
`

export const SubTitle = styled.Text`
  font-size: 18px;

  width: 320px;
  text-align: center;
  padding-top: 12px;

  color: #333;
`

export const ContainerButton = styled.View`
  height: 56px;
  margin-bottom: 48px;
  align-items: center;
`

export const Button = styled(RectButton)`
  height: 56px;
  width: 360px;
  flex-direction: row;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #333;
 `

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  padding-right: 24px;
`
