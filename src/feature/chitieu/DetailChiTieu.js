import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Detail from '../detail/Detail';
import { deleteItemChiTieu } from '../common/localStoreHelper';
import { LOCALSTOREKEY } from '../common/Constant';
import useDeleteDetail from '../customHook/useDeleteDetail';
import { useDispatch } from 'react-redux';
import { setSelectedItemChiTieu } from '../delete/deleteSlice';

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

const ChiTieuDetail = ({
    route,
    navigation
}) => {
    const {
        money,
        date,
        id
    } = route.params;
    const dispatch = useDispatch();

    const handleDelete = async model => {
        await dispatch(setSelectedItemChiTieu({
            dataId: id,
            selected: false
        }));
        await dispatch(deleteItemChiTieu(model));
    }

    const propsDelete = {
        date,
        dataId: id,
        localStoreKey: LOCALSTOREKEY.CHITIEU,
        onDelete: handleDelete,
        navigation,
        message: 'Xoá chi tiêu',
        buttonTextCancel: 'Cancel',
        styleButtonCancel: 'cancel',
        buttonTextOK: 'Ok',
        styleButtonOK: 'ok',
        titleHeader: 'Chi tiêu'
    }
    useDeleteDetail(propsDelete);

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
