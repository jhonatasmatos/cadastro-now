import React from 'react'
import { StatusBar } from 'react-native'

// Routes
import Routes from './routes'

const App: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Routes />
  </>
)

export default App
