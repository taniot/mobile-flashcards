import * as React from 'react'
import { View, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import NavigationMenu from './navigation/NavigationMenu'
import MyStatusBar from './navigation/StatusBar'
import { main } from './utils/colors'

export default function App() {
  return (
    <View
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        >
    <NavigationContainer>
      <MyStatusBar backgroundColor={main} barStyle='light-content' />
      <NavigationMenu />
    </NavigationContainer>
    </View>
  )
}
