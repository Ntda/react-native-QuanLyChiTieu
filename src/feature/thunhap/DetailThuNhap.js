import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import useSetHeaderDetail from '../customHook/useSetHeaderDetail';
import Detail from '../detail/Detail';

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
    } = route.params;

    const handleDeleteChiTieu = () => {
        navigation.popToTop();
    }

    const headerModel ={
        navigation,
        title: 'Thu nhập',
        onDelete: handleDeleteChiTieu,
        children: undefined
    }

    useSetHeaderDetail(headerModel);

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
