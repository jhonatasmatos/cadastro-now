import { AppRegistry } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

Icon.loadFont();
import App from './src'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
