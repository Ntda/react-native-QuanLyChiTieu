import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import ThemChiTieu from './feature/chitieu/ThemChiTieu';
import { STACKNAVIGATIONROUTE, THEMCHITIEUTITLE } from './feature/common/Constant';
import ViewMode from './feature/chitieu/ViewMode';

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
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.viewMode}
                component={ViewMode}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;