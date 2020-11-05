import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import UserDrawer from './src/feature/user/UserDrawer';



const CustomDrawer = props => {
    console.log(JSON.stringify(props.navigation.state));
    const {
        navigation
    } = props;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <UserDrawer/>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

CustomDrawer.propTypes = {

};

export default CustomDrawer;