import React, {Component} from 'react'
import { View, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import NavigationMenu from './navigation/NavigationMenu'
import MyStatusBar from './navigation/StatusBar'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/decks'
import middleware from './middleware/index'
import { main } from './utils/colors'
const store = createStore(reducer, middleware)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        >
          <NavigationContainer>
            <MyStatusBar backgroundColor={main} barStyle='light-content' />
            <NavigationMenu />
          </NavigationContainer>
        </View>
      </Provider>
    )
  }
}

export default App
