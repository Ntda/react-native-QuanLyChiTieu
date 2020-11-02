import React, { useEffect } from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryGroup,
    VictoryBar
} from "victory-native";
import {
    View
} from 'react-native';
import { useSelector, useStore } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { calculateAmountPerMonth, filterEntitiesByMonthYear } from '../common/commonHelper';
import NoDataComponent from '../common/NoDataComponent';
import { getDataThongKeByMonthAndYear } from '../common/localStoreHelper';

const Chart = () => {
    const monthModel = useSelector(state => state.thongKe);

    const {
        selectedMonth,
        currentYear,
        chartInfo,
        loading
    } = monthModel;
    const {
        thuNhap,
        chiTieu,
        conLai
    } = chartInfo;
    const xAxisLabel = `${selectedMonth}/${currentYear}`;

    if (!thuNhap && !chiTieu) {
        return <View>
            <NoDataComponent
                message='Không có dữ liệu' />
        </View>
    }

    useEffect(() => {
        getDataThongKeByMonthAndYear({
            selectedMonth,
            currentYear
        });
    }, [selectedMonth, currentYear])

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