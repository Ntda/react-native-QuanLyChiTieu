import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


const useSetHeaderDetail = headerModel => {
    const {
        navigation,
        title,
        onDelete,
        children
    } = headerModel;
    useEffect(() => {
        navigation.setOptions({
            title,
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        marginRight: 5
                    }}
                    onPress={() => onDelete()}>
                    {children}
                </TouchableOpacity>
            )
        });
    }, [headerModel]);
};


export default useSetHeaderDetail;