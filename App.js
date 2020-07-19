import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationMenu from './navigation/NavigationMenu'
import MyStatusBar from './navigation/StatusBar'
import { main } from './utils/colors'

export default function App() {
  return (
    <NavigationContainer>
      <MyStatusBar backgroundColor={main} barStyle='light-content' />
      <NavigationMenu />
    </NavigationContainer>
  )
}
