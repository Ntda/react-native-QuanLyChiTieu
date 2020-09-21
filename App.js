/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/StackNavigation';

const App = () => {
  return (
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
  );
}

export default App;
