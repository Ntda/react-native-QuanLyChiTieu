import React, { useState } from 'react';
import { Avatar } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';

const AvartarSelector = props => {
    const [displayAvatar, setDisplayAvatar] = useState(true);
    const handleDisplayAvatar = canDisplay => {
        console.log('[handleDisplayAvatar]: '+ canDisplay)
        setDisplayAvatar(canDisplay);
    }
    const renderAvatar = () => {
        return (
            <Avatar
                overlayContainerStyle={{ backgroundColor: props.color }}
                size='medium'
                rounded
                title={props.title.charAt(0).toUpperCase()}
                activeOpacity={0.7}
                onPress={() => handleDisplayAvatar(false)}
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
                onPress={() => handleDisplayAvatar(true)} />
        );
    }

    return (
        <>
            {displayAvatar
                ? renderAvatar()
                : renderCheckedIcon()}
        </>
    );
};

export default AvartarSelector;