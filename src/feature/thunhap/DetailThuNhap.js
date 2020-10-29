import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Detail from '../detail/Detail';
import useDeleteDetail from '../customHook/useDeleteDetail';
import { LOCALSTOREKEY } from '../common/Constant';
import { deleteItemThuNhap } from '../common/localStoreHelper';
import { useDispatch } from 'react-redux';
import { setSelectedItemThuNhap } from '../delete/deleteSlice';

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

const ThuNhapDetail = ({
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
        await dispatch(setSelectedItemThuNhap({
            dataId: id,
            selected: false
        }));
        await dispatch(deleteItemThuNhap(model));
    }

    const propsDelete = {
        date,
        dataId: id,
        localStoreKey: LOCALSTOREKEY.THUNHAP,
        onDelete: handleDelete,
        navigation,
        message: 'Xoá thu nhập',
        buttonTextCancel: 'Cancel',
        styleButtonCancel: 'cancel',
        buttonTextOK: 'Ok',
        styleButtonOK: 'ok',
        titleHeader: 'Thu nhập'
    }

    useDeleteDetail(propsDelete);

    const appendMoneyToTitle = () => {
        return (
            <Text style={{
                color: 'green'
            }}>+{money}</Text>
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

export default ThuNhapDetail;
