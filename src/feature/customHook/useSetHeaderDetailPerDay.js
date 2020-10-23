import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const useSetHeaderDetailPerDay = (
    navigation,
    title,
    onDelete,
    children) => {
    useEffect(() => {
        navigation.setOptions({
            title,
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        marginRight: 5
                    }}
                    onPress={() => onDelete()}>
                        
                    <AntDesign
                        name='delete'
                        size={25} />
                </TouchableOpacity>
            )
        });
    }, [navigation]);
};


export default useSetHeaderDetailPerDay;