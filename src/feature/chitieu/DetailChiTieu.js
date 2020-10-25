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

    const propsDelete = {
        date,
        dataId: id,
        localStoreKey: LOCALSTOREKEY.CHITIEU,
        action: deleteItemChiTieu,
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
