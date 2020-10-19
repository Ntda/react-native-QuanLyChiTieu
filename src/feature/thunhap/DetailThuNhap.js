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

    useSetHeaderDetail(navigation, 'Thu nhập', () => handleDeleteChiTieu);

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
