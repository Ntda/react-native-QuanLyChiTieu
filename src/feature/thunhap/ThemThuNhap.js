import React from 'react';
import Them from '../common/Them';

const ThemThuNhap = ({ route, navigation }) => {
    const { titleHeader } = route.params;
    return (
        <Them
            navigation={navigation}
            titleHeader={titleHeader}
        />
    );
};

export default ThemThuNhap;