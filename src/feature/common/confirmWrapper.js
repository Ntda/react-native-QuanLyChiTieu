import {
    Alert
} from 'react-native';

const confirmWrapper = confirmModel => {
    const {
        title,
        message,
        buttonTextCancel,
        styleButtonCancel,
        onCancel,
        buttonTextOK,
        styleButtonOK,
        onOK
    } = confirmModel;
    return (
        Alert.alert(
            title,
            message,
            [
                {
                    text: buttonTextCancel,
                    onPress: onCancel,
                    style: styleButtonCancel
                },
                {
                    text: buttonTextOK,
                    onPress: onOK,
                    style: styleButtonOK
                }
            ],
            { cancelable: false }
        )
    );
};

export default confirmWrapper;