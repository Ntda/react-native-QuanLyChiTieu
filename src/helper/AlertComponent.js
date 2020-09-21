import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const AlertComponent = ({
    onCloseAlert,
    message,
    confirmText,
    confirmButtonColor }) => {
    return (<AwesomeAlert
        show={true}
        showProgress
        useNativeDriver
        showProgress
        message={message}
        closeOnTouchOutside
        closeOnHardwareBackPress
        showConfirmButton
        confirmText={confirmText}
        confirmButtonColor={confirmButtonColor}
        onConfirmPressed={onCloseAlert}
        onDismiss={onCloseAlert}
    />);
}

export default AlertComponent;