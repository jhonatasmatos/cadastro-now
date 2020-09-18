import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from '../screens/Home'

const App = createStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  </NavigationContainer>
)

export default Routes
