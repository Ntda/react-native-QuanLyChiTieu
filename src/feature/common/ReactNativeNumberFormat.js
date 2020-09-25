import NumberFormat from 'react-number-format';
import { Text } from 'react-native';
import React from 'react';

const ReactNativeNumberFormat = ({ value }) => {
    return (
        <NumberFormat
            value={500000000}
            displayType={'input'}
            type='text'
            thousandSeparator={true}
            prefix={'VND'}
            //renderText={formattedValue => <Text>{formattedValue}</Text>}
        />
    );
}

export default ReactNativeNumberFormat;