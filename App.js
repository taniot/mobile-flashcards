import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationMenu from './navigation/stack'


export default function App() {
  return (
    <NavigationContainer>
      <NavigationMenu />
    </NavigationContainer>
  );
}
