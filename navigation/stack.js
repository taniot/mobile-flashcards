import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabMenu from './tabs'
import DeckView from '../pages/DeckView.component'
import NewCard from '../pages/NewCard.component'
import QuizView from '../pages/QuizView.component'



const Stack = createStackNavigator();

function NavigationMenu() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabMenu} />
      <Stack.Screen name="Current Deck" component={DeckView} />
      <Stack.Screen name="New Card" component={NewCard} />
      <Stack.Screen name="Quiz View" component={QuizView} />
    </Stack.Navigator>
  );
}

export default NavigationMenu;