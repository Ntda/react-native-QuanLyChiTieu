import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { STACKNAVIGATIONROUTE } from '../common/Constant';
import {
    View,
    Text
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddComponent = ({navigation}) => {
    const renderButtonAdd = () => {
        return (
            <View style={{
                position: 'absolute',
                bottom: 10,
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
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate(STACKNAVIGATIONROUTE.themChiTieu)}>
                    <AntDesign
                        style={{
                            color: '#033dfc',
                            marginRight: 10
                        }}
                        name='edit'
                        size={25}/>
                    <Text style={{
                        color: '#033dfc',
                        fontSize: 15,
                        fontFamily: 'Times'
                    }}>
                        Thêm
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        renderButtonAdd()
    );
};

export default AddComponent;