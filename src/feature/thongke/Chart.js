import React from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryGroup,
    VictoryBar
} from "victory-native";
import {
    View
}from 'react-native';
import { useSelector, useStore } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { calculateAmountPerMonth, filterEntitiesByMonthYear } from '../common/commonHelper';
import NoDataComponent from '../common/NoDataComponent';

const Chart = () => {
    const monthModel = useSelector(state => state.thongKe);
    const store = useStore().getState();
    const { selectedMonth, currentYear } = monthModel;
    const xAxisLabel = `${selectedMonth}/${currentYear}`;
    const thuNhapEntities = filterEntitiesByMonthYear(
        store.thuNhap.entities,
        selectedMonth,
        currentYear);
    const chiTieuEntities = filterEntitiesByMonthYear(
        store.chiTieu.entities,
        selectedMonth,
        currentYear);;

    console.log('[store]: ' + JSON.stringify(chiTieuEntities));
    if (!thuNhapEntities.length && !chiTieuEntities.length) {
        return <View><NoDataComponent
        message='Không có dữ liệu' /></View>
    }
    const chartInfo = calculateAmountPerMonth(
        thuNhapEntities,
        chiTieuEntities,
        selectedMonth,
        currentYear
    );


    return (
        <VictoryChart
            key={nanoid()}
            theme={VictoryTheme.material}>
            <VictoryGroup offset={10}
                colorScale='qualitative'
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
            >
                <VictoryBar
                    data={[{ x: xAxisLabel, y: chartInfo.thuNhap }]}
                />
                <VictoryBar
                    data={[{ x: xAxisLabel, y: chartInfo.chiTieu }]}
                />
                <VictoryBar
                    data={[{ x: xAxisLabel, y: chartInfo.conLai }]}
                />
            </VictoryGroup>
        </VictoryChart>
    );
};

export default Chart;