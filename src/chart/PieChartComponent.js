import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

const PieChartComponent = ({data}) => {
    const Labels = ({ slices }) => {
        return slices.map((slice, index) => {
            const { pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'black'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={17}
                    stroke={'black'}
                    strokeWidth={0.2}
                >
                    {`${data.amount}%`}
                </Text>
            )
        })
    }

    return <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        outerRadius={'95%'}
    >
        <Labels />
    </PieChart>
};

export default PieChartComponent;