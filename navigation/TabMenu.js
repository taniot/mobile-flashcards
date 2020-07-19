import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckList from '../pages/DeckList.component'
import NewDeck from '../pages/NewDeck.component'
import { Octicons } from '@expo/vector-icons'

import { main, primary } from '../utils/colors'
const Tab = createBottomTabNavigator()

function TabMenu() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#CC0000',
        inactiveTintColor: '#666666',
        style: {
          padding: 10,
          paddingBottom: 10,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name='Decks List'
        component={DeckList}
        options={{
          tabBarLabel: 'Decks List',
          tabBarIcon: ({ color }) => (
            <Octicons name='home' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='New Deck'
        component={NewDeck}
        options={{
          tabBarLabel: 'New Deck',
          tabBarIcon: ({ color }) => (
            <Octicons name='diff-added' color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabMenu
