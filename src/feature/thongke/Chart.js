import React, { useEffect } from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryGroup,
    VictoryBar
} from "victory-native";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import NoDataComponent from '../common/NoDataComponent';
import { getDataThongKeByMonthAndYear } from '../common/localStoreHelper';
import { CHARTCOLOR } from '../common/Constant';
import { buildDescriptionThongKeChart } from '../common/commonHelper';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    chartDescription: {
        width: 200,
        height: 10,
        borderRadius: 8,
        marginTop: 9
    }
});

const Chart = () => {
    const monthModel = useSelector(state => state.thongKe);
    const dispatch = useDispatch();
    const {
        selectedMonth,
        currentYear,
        chartInfo,
        loading
    } = monthModel;
    console.log('getDataThongKeByMonthAndYearmonthModel: ' + JSON.stringify(chartInfo));
    const {
        thuNhap,
        chiTieu,
        conLai,
        thuNhapFormatter,
        chiTieuFormatter,
        conLaiFormatter
    } = chartInfo;

    const xAxisLabel = `${selectedMonth}/${currentYear}`;

    useEffect(() => {
        dispatch(getDataThongKeByMonthAndYear({
            selectedMonth,
            currentYear
        }));
    }, [selectedMonth, currentYear])

    if (!thuNhap && !chiTieu) {
        return <View>
            <NoDataComponent
                message='Không có dữ liệu' />
        </View>
    }

    const renderChart = () => {
        return (
            <VictoryChart
                key={nanoid()}
                theme={VictoryTheme.material}>
                <VictoryGroup offset={10}>
                    <VictoryBar
                        style={{
                            data: {
                                fill: CHARTCOLOR.THUNHAP
                            }
                        }}
                        data={[{ x: xAxisLabel, y: thuNhap }]}
                    />
                    <VictoryBar
                        style={{
                            data: {
                                fill: CHARTCOLOR.CHITIEU
                            }
                        }}
                        data={[{ x: xAxisLabel, y: chiTieu }]}
                    />
                    <VictoryBar
                        style={{
                            data: {
                                fill: CHARTCOLOR.CONLAI
                            }
                        }}
                        data={[{ x: xAxisLabel, y: conLai }]}
                    />
                </VictoryGroup>
            </VictoryChart>
        )
    }

    const renderDesciptionChart = () => {
        const descriptionModel = buildDescriptionThongKeChart(thuNhapFormatter, chiTieuFormatter, conLaiFormatter);
        return (
            <View style={{
                marginTop: 40
            }}>
                {descriptionModel.map(item => {
                    return (
                        <View key={item.title}
                            style={styles.item}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'Times'
                            }}>{item.title}</Text>
                            <View style={[styles.chartDescription, {
                                backgroundColor: item.color
                            }]} />
                            <Text style={{
                                color: item.color,
                                fontFamily: 'Times',
                                fontWeight: 'bold',
                                fontSize: 15
                            }}>{item.ammount}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <View>
            {renderChart()}
            {renderDesciptionChart()}
        </View>
    );
};

export default Chart;