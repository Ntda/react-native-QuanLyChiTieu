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
import AntDesign from 'react-native-vector-icons/AntDesign';

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

    const deleteIcon = <AntDesign
        name='delete'
        size={25} />

    const headerModel ={
        navigation,
        title: 'Chi tiêu',
        onDelete: handleDeleteChiTieu,
        children: deleteIcon
    }

    useSetHeaderDetail(headerModel);

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
