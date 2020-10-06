import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { STACKNAVIGATIONROUTE } from '../common/Constant';
import {
    View,
    Text
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FilterTimeRangeComponent = ({ navigation }) => {
    const renderButtonFilter = () => {
        return (
            <View style={{
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
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate(STACKNAVIGATIONROUTE.timeRange)}
                >
                    <AntDesign
                        style={{
                            color: 'red',
                            marginRight: 10
                        }}
                        name='filter'
                        size={25} />
                    <Text style={{
                        color: 'red',
                        fontSize: 15,
                        fontFamily: 'Times'
                    }}>
                        Lọc
                </Text>
                </TouchableOpacity>
            </View >
        )
    }
    return (
        renderButtonFilter()
    );
};

export default FilterTimeRangeComponent;