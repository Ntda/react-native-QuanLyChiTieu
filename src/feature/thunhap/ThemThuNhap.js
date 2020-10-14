import React from 'react';
import Them from '../common/Them';
import { useDispatch } from 'react-redux';
import { ROUTETHUNHAP, LOCALSTOREKEY } from '../common/Constant';
import { setItemThuNhap } from '../common/localStoreHelper';

const ThemThuNhap = ({ route, navigation }) => {
    const { titleHeader } = route.params;
    const dispatch = useDispatch();
    const handleAddChiTieu = model => {
        (async (model, navigation, ) => {
            await dispatch(setItemThuNhap({
                ...model,
                key: LOCALSTOREKEY.THUNHAP
            }));
            navigation.navigate(ROUTETHUNHAP);
        })(model, navigation, ROUTETHUNHAP);
    }
    return (
        <Them
            navigation={navigation}
            titleHeader={titleHeader}
            onAdd={handleAddChiTieu}
        />
    );
};

export default ThemThuNhap;