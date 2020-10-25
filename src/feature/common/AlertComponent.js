import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const AlertComponent = ({
    onCloseAlert,
    onCancelPress,
    message,
    confirmText,
    confirmButtonColor,
    showCancelButton,
    cancelText
}) => {
    return (<AwesomeAlert
        show
        useNativeDriver
        message={message}
        closeOnTouchOutside
        closeOnHardwareBackPress
        showConfirmButton
        showCancelButton={showCancelButton}
        closeOnTouchOutside
        cancelText={cancelText}
        confirmText={confirmText}
        confirmButtonColor={confirmButtonColor}
        onConfirmPressed={onCloseAlert}
        onCancelPressed={onCancelPress}
        onDismiss={onCloseAlert}
    />);
}

export default AlertComponent;