import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './routes/HomeStack';

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeStack />
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
