import React, { useState } from 'react';
import { Avatar } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';

const AvartarSelector = props => {
    const [displayAvatar, setDisplayAvatar] = useState(true);
    const renderAvatar = () => {
        return (
            <Avatar
                overlayContainerStyle={{ backgroundColor: props.color }}
                size='medium'
                rounded
                title={props.title.charAt(0).toUpperCase()}
                activeOpacity={0.7}
                onPress={() => setDisplayAvatar(false)}
            />);
    }
    const renderCheckedIcon = () => {
        return (
            <Ionicons
                style={{
                    color: 'tomato'
                }}
                name='checkmark-circle-outline'
                size={45}
                onPress={() => setDisplayAvatar(true)} />
        );
    }

    return (
        <>
            { displayAvatar
                ? renderAvatar()
                : renderCheckedIcon()}
        </>
    );
};

export default AvartarSelector;