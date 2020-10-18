import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const NoDataComponent = ({ message }) => {
    return (
        <View style={
            styles.container
        }>
            <Text style={{
                fontSize: 15,
                fontWeight: 'bold'
            }}>{message}</Text>
        </View>
    );
};

export default NoDataComponent;