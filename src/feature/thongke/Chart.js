import React from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryGroup,
    VictoryBar
} from "victory-native";
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const Chart = () => {
    const monthModel = useSelector(state => state.thongKe);
    const { selectedMonth, currentYear } = monthModel;
    const xAxisLabel = `${selectedMonth}/${currentYear}`;

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
                    barWidth={90}
                    data={[{ x: xAxisLabel, y: 100 }]}
                />
                <VictoryBar
                    barWidth={70}
                    data={[{ x: xAxisLabel, y: 200 }]}
                />
                <VictoryBar
                    data={[{ x: xAxisLabel, y: 300 }]}
                />
            </VictoryGroup>
        </VictoryChart>
    );
};

export default Chart;