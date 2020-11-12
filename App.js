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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import store from './src/app/store';
import MessageScreen from './src/MessageScreen';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerType='back'
          initialRouteName='Home'
          drawerContentOptions={{
            activeTintColor: 'tomato'
          }}
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen
            name='Home'
            component={StackNavigation}
            options={{
              title: 'Home',
              drawerIcon: ({ focused, size }) => (
                <View
                  style={
                    focused
                      ? {
                        borderLeftColor: 'red',
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                      }
                      : null
                  }>
                  <Icon
                    name="home"
                    color={focused ? 'red' : '#ccc'}
                    size={size}
                    solid
                  />
                </View>
              )
            }} />
          <Drawer.Screen
            name='Notifications'
            component={MessageScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
