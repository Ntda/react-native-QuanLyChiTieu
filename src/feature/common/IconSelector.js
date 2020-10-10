import React from 'react';
import { ICONTYPE } from './Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IconSelector = props => {
    const { type } = props;
    switch (type) {
        case ICONTYPE.ICONFILTERANT:
            return <AntDesign
                style={{
                    color: 'red',
                    marginRight: 10
                }}
                name='filter'
                size={25} />
        case ICONTYPE.ICONFILTERAWARESOME:
            return <FontAwesome
                style={{
                    color: 'red',
                    marginRight: 10
                }}
                name='filter'
                size={25} />
        default:
            return null;
    }
};

IconSelector.propTypes = {

};

export default IconSelector;