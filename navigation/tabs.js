import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckList from '../pages/DeckList.component'
import NewDeck from '../pages/NewDeck.component'

const Tab = createBottomTabNavigator()

function TabMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={DeckList} />
      <Tab.Screen name='New Deck' component={NewDeck} />
    </Tab.Navigator>
  )
}

export default TabMenu
