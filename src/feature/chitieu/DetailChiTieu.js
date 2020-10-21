import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import useSetHeaderDetail from '../customHook/useSetHeaderDetail';
import Detail from '../detail/Detail';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemChiTieu } from '../common/localStoreHelper';
import { LOCALSTOREKEY } from '../common/Constant';

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

const ChiTieuDetail = ({
    route,
    navigation
}) => {
    const dispatch = useDispatch();
    const {
        money,
        date,
        id
    } = route.params;
    const handleDeleteChiTieu = async () => {
        const deleteModel = {
            date,
            dataId: id,
            localStoreKey: LOCALSTOREKEY.CHITIEU
        }
        await dispatch(deleteItemChiTieu(deleteModel));
        navigation.popToTop();
    }

    useSetHeaderDetail(navigation, 'Chi tiêu', handleDeleteChiTieu);

    const appendMoneyToTitle = () => {
        return (
            <Text style={{
                color: 'red'
            }}>-{money}</Text>
        )
    }
    return (
        <View style={styles.container}>
            <Detail
                route={route}>
                {appendMoneyToTitle()}
            </Detail>
        </View>
    );
};

export default ChiTieuDetail;
