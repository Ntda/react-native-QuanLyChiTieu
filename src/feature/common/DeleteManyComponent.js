import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 96,
        right: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        paddingLeft: 30,
        paddingRight: 25,
        paddingTop: 5,
        paddingBottom: 5
    }
})

const DeleteManyComponent = ({
    onDeleteManyItem,
    totalItem
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    flexDirection: 'row'
                }}
                onPress={onDeleteManyItem}
            >
                <AntDesign
                    name='delete'
                    size={25} />
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'Times'
                }}>
                    {' '}({totalItem})
                </Text>
            </TouchableOpacity>
        </View >
    );
};

export default DeleteManyComponent;