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
import { TouchableHighlight } from 'react-native-gesture-handler';
import { CHART } from '../common/Constant';

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    infoChart: {
        padding: 25,
        borderRadius: 15
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
            <View>
                <PieChartComponent
                    data={dataPieChart} />
                <Text style={{
                    backgroundColor: 'red',
                    paddingTop: 20,
                    textAlign: 'center',
                    color: 'gray',
                    fontSize: 20
                }}>Số dư khả dụng</Text>
                <Text style={{
                    backgroundColor: 'red',
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>Số dư khả dụng</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Text
                        style={[styles.infoChart, {backgroundColor: CHART.COLORCHITIEU}]}
                    >Khả dụng</Text>
                    <Text>Khả dụng</Text>
                </View>
            </View>
        );
    }

    const appendMoneyToTitle = () => {
        return (
            <Text style={{
                color: 'red'
            }}>-{money}</Text>
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
