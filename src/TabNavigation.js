import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThuNhap from './feature/thunhap/ThuNhap';
import ChiTieu from './feature/chitieu/ChiTieu';
import ThongKe from './feature/thongke/ThongKe';
import {
    ROUTETHUNHAP,
    ICONTHUNHAP,
    ROUTECHITIEU,
    ICONCHITIEU,
    ROUTETHONGKE,
    ICONTHONGKE,
    ICONTHUNHAPOUTLINE,
    ICONCHITIEUOUTLINE,
    ICONTHONGKEOUTLINE,
    NAVIGATIONTITLE
} from './feature/common/Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const buildScreenOptions = ({ route }) => {
        return ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case ROUTETHUNHAP:
                        iconName = focused
                            ? ICONTHUNHAP
                            : ICONTHUNHAPOUTLINE;
                        break;
                    case ROUTECHITIEU:
                        iconName = focused
                            ? ICONCHITIEU
                            : ICONCHITIEUOUTLINE;
                        break;
                    case ROUTETHONGKE:
                        iconName = focused
                            ? ICONTHONGKE
                            : ICONTHONGKEOUTLINE;
                        break;
                }
                return <Ionicons
                    name={iconName}
                    size={size}
                    color={color} />
            }
        })
    };

    const buildTabBarOptions = () => {
        return ({
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        })
    };

    return (
        <Tab.Navigator
            screenOptions={buildScreenOptions}
            tabBarOptions={buildTabBarOptions()}>
            <Tab.Screen
                options={{ title: NAVIGATIONTITLE.thuNhap }}
                name={ROUTETHUNHAP}
                component={ThuNhap} />
            <Tab.Screen
                options={{ title: NAVIGATIONTITLE.chiTieu }}
                name={ROUTECHITIEU}
                component={ChiTieu} />
            <Tab.Screen
                options={{ title: NAVIGATIONTITLE.thongKe }}
                name={ROUTETHONGKE}
                component={ThongKe} />
        </Tab.Navigator>
    );
}

export default TabNavigation;