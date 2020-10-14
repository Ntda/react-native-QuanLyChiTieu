import React from 'react';
import Them from '../common/Them';
import { useDispatch } from 'react-redux';
import { setItemChiTieu } from '../common/localStoreHelper';
import { ROUTECHITIEU, LOCALSTOREKEY } from '../common/Constant';

const ThemChiTieu = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { titleHeader } = route.params;
    const handleAddChiTieu = model => {
        (async (model, navigation, ROUTECHITIEU) => {
            await dispatch(setItemChiTieu({
                ...model,
                key: LOCALSTOREKEY.CHITIEU
            }));
            navigation.navigate(ROUTECHITIEU);
        })(model, navigation, ROUTECHITIEU);
    }
    return (
        <Them
            navigation={navigation}
            titleHeader={titleHeader}
            onAdd={handleAddChiTieu}
        />
    );
};

export default ThemChiTieu;