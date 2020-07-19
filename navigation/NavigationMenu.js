import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabMenu from './TabMenu'
import DeckView from '../pages/DeckView.component'
import NewCard from '../pages/NewCard.component'
import QuizView from '../pages/QuizView.component'

const Stack = createStackNavigator()

function NavigationMenu() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={TabMenu}
        options={{
          animationEnabled: true,
          headerShown: false,
        }}
      />
      <Stack.Screen name='DeckView' component={DeckView} options={{
        title: 'Deck Info',
      }} />
      <Stack.Screen name='NewCard' component={NewCard} options={{
        title: 'New Card',
      }} />
      <Stack.Screen name='QuizView' component={QuizView}  options={{
        title: 'Quiz', 
      }}/>
    </Stack.Navigator>
  )
}

export default NavigationMenu
