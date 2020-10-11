import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import ThemChiTieu from './feature/chitieu/ThemChiTieu';
import { STACKNAVIGATIONROUTE } from './feature/common/Constant';
import TimeRange from './feature/chitieu/TimeRange';
import Detail from './feature/detail/Detail';

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
                component={ThemChiTieu} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.timeRange}
                component={TimeRange} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.chitiet}
                component={Detail} />
        </Stack.Navigator>
    )
}

export default StackNavigation;