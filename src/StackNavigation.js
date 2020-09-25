import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import ThemChiTieu from './feature/chitieu/ThemChiTieu';
import { STACKNAVIGATIONROUTE, THEMCHITIEUTITLE } from './feature/common/Constant';

const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'>
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.home}
                component={TabNavigation}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.themChiTieu}
                component={ThemChiTieu}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;