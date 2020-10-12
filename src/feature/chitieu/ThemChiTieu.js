import React from 'react';
import Them from '../common/Them';

const ThemChiTieu = ({ route, navigation }) => {
    const { titleHeader } = route.params;
    return (
        <Them
            navigation={navigation}
            titleHeader={titleHeader}
        />
    );
};

export default ThemChiTieu;