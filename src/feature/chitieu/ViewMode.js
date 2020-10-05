import React, { useEffect } from 'react';
import { VIEWMODEROUTE } from '../common/Constant';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';

const ViewMode = ({ navigation }) => {
    const renderStyleHeader = () => {
        return ({
            title: VIEWMODEROUTE.title,
            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        });
    }

    useEffect(() => {
        navigation.setOptions({
            ...renderStyleHeader()
        });
    }, [navigation]);
    return (
        <View>
            <Text>
                View mode
            </Text>
        </View>
    );
};

export default ViewMode;