import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const IconSend = ({onSend}) => {
    return (
        <Ionicons
            style={{
                color: 'black',
                paddingRight: 20
            }}
            name='send'
            size={20}
            onPress={onSend} />
    )
}

export default IconSend;