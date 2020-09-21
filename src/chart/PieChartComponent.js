import React from 'react';
import { PieChart } from 'react-native-svg-charts';

const PieChartComponent = () => {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
    console.log(data);

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000')
        .slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))
    const Chart = <PieChart
        style={{ height: 200 }}
        data={pieData} />;
console.log(Chart)
    return Chart;
};

export default PieChartComponent;