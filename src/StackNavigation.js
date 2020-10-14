import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import { STACKNAVIGATIONROUTE } from './feature/common/Constant';
import Detail from './feature/detail/Detail';
import ThemChiTieu from './feature/chitieu/ThemChiTieu';
import FilterChiTieu from './feature/chitieu/FilterChiTieu';
import ThemThuNhap from './feature/thunhap/ThemThuNhap';
import FilterThuNhap from './feature/thunhap/FilterThuNhap';

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
                name={STACKNAVIGATIONROUTE.themThuNhap}
                component={ThemThuNhap} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.filterChiTieu}
                component={FilterChiTieu} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.filterThuNhap}
                component={FilterThuNhap} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.chitiet}
                component={Detail} />
        </Stack.Navigator>
    )
}

export default StackNavigation;