import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import PieChartComponent from '../../chart/PieChartComponent';
import { useStore } from 'react-redux';
import { buildDataPieChart } from '../common/commonHelper';
import { getNumberFromString } from '../common/numberFormater';
import useSetHeaderDetail from '../customHook/useSetHeaderDetail';
import Detail from '../detail/Detail';

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

const ChiTieuDetail = ({
    route,
    navigation
}) => {
    const store = useStore();
    const {
        money,
    } = route.params;

    useSetHeaderDetail(navigation);

    const renderChart = () => {
        const state = store.getState();
        const { thuNhap } = state;
        const ammountThuNhap = thuNhap.totalMoneyBaseOnTimeRange;
        const ammountChiTieu = getNumberFromString(money);
        const dataPieChart = buildDataPieChart(ammountThuNhap, ammountChiTieu);
        return (
            <View style={{

            }}>
                <PieChartComponent
                    data={dataPieChart} />
            </View>);
    }

    const appendMoneyToTitle = () => {
        return (
            <Text>-{money}</Text>
        )
    }
    return (
        <View style={styles.container}>
            {renderChart()}
            <Detail
                route={route}>
                {appendMoneyToTitle()}
            </Detail>
        </View>
    );
};

export default ChiTieuDetail;
