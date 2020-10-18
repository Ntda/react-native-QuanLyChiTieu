import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import { STACKNAVIGATIONROUTE } from './feature/common/Constant';
import ThemChiTieu from './feature/chitieu/ThemChiTieu';
import FilterChiTieu from './feature/chitieu/FilterChiTieu';
import ThemThuNhap from './feature/thunhap/ThemThuNhap';
import FilterThuNhap from './feature/thunhap/FilterThuNhap';
import ChiTieuDetail from './feature/chitieu/DetailChiTieu';
import ThuNhapDetail from './feature/thunhap/DetailThuNhap';
import ChiTieuDetailPerDay from './feature/chitieu/ChiTieuDetailPerDay';
import ThuNhapDetailPerDay from './feature/thunhap/ThuNhapDetailPerDay';

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
                name={STACKNAVIGATIONROUTE.viewDetailChiTieuPerDay}
                component={ChiTieuDetailPerDay} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.viewDetailThuNhapPerDay}
                component={ThuNhapDetailPerDay} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.viewDetailChiTieu}
                component={ChiTieuDetail} />
            <Stack.Screen
                name={STACKNAVIGATIONROUTE.viewDetailThuNhap}
                component={ThuNhapDetail} />
        </Stack.Navigator>
    )
}

export default StackNavigation;