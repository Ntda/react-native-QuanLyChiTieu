import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { STACKNAVIGATIONROUTE, ICONTYPE } from './Constant';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import IconSelector from './IconSelector';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
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

const FilterTimeRangeComponent = props => {
    const {
        navigation,
        iconType,
        ...rest
    } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    flexDirection: 'row'
                }}
                onPress={() => navigation.navigate(STACKNAVIGATIONROUTE.timeRange, { ...rest })}
            >
                <IconSelector
                    type={iconType}
                />
                <Text style={{
                    color: 'red',
                    fontSize: 15,
                    fontFamily: 'Times'
                }}>
                    Lọc
                </Text>
            </TouchableOpacity>
        </View >
    );
};

export default FilterTimeRangeComponent;