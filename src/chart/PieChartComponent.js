import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import { commaFormatted } from '../feature/common/numberFormater';
import { isEqual } from 'lodash';

const PieChartComponent = ({ data, onRenderLabel }) => {
    const Labels = ({ slices }) => {
        return slices.map((slice, index) => {
            const { pieCentroid, data } = slice;
            const label = isEqual(data.key, 'chiTieu')
                ? {
                    color: 'red',
                    symbol: '-'
                }
                : {
                    color: 'blue',
                    symbol: ''
                };
            return (
                <Text
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={label.color}
                    textAnchor='middle'
                    alignmentBaseline='middle'
                    fontSize={17}
                    stroke={'black'}
                    strokeWidth={0.2}
                >
                    {`${label.symbol}${commaFormatted(data.amount)} đ`}
                </Text>
            )
        })
    }

    return <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        innerRadius='50%'
        outerRadius='100%'
    >
        <Labels />
    </PieChart>
};

export default PieChartComponent;