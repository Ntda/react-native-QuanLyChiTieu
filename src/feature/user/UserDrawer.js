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
import ImagePicker from 'react-native-image-picker';

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
    const handleAccessory = () => {
        ImagePicker.showImagePicker({}, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                console.log('source: ', source);
            }
        });
    }
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
                onAccessoryPress={handleAccessory}
            />
            <Text style={styles.userName}>abc</Text>
        </View>
    );
};


export default UserDrawer;