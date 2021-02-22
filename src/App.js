import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './store';
import HomeStack from './routes/HomeStack';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <HomeStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
