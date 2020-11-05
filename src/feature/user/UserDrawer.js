import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    TouchableOpacity,
} from 'react-native';
import { Avatar } from "react-native-elements";

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        marginTop: 10
    },
    userName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3f3d3e'
    }
});

const UserDrawer = props => {
    const avatar_url =
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';

    return (
        <View style={styles.sideMenuProfileIcon}>
            <Avatar
                size="xlarge"
                rounded
                source={{
                    uri: avatar_url
                }}
                showAccessory
            />
            <Text style={styles.userName}>abc</Text>
        </View>
    );
};


export default UserDrawer;