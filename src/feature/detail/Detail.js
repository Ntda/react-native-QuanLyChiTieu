import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { isEqual } from 'lodash';
import { NAVIGATIONTITLE } from '../common/Constant';
import PieChartComponent from '../../chart/PieChartComponent';
import { useStore } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        fontWeight: 'normal',
        fontSize: 17,
        padding: 5,
        backgroundColor: 'gray',
        borderRadius: 5
    },
    ammount: {
        backgroundColor: 'tomato'
    },
    description: {
        marginTop: 20,
        backgroundColor: '#d9f2e6',
        padding: 20,
        borderRadius: 20
    },
    content: {
        fontSize: 20,
        color: '#595959'
    }
})

const Detail = ({
    route,
    navigation
}) => {
    console.log('[Detail]: ' + JSON.stringify(route.params));
    const store = useStore();
    const {
        id,
        tabType,
        title,
        date,
        money,
        content } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: 'Chi tiết'
        });
    }, []);

    const renderTitle = () => {
        return (
            <View>
                <Text style={[styles.title]}>
                    {title}{' '}
                    <View style={styles.date}>
                        <Text>{date}</Text>
                    </View>
                    <Text>{' '}</Text>
                    <View style={[styles.date, styles.ammount]}>
                        <Text>{isEqual(tabType, NAVIGATIONTITLE.chiTieu)
                            ? '- '
                            : ''}
                            {money}</Text>
                    </View>
                </Text>
            </View>
        )
    }

    const renderContent = () => {
        return (
            <View style={[styles.description]}>
                <Text style={styles.content}>
                    {content}
                </Text>
            </View>
        )
    }

    const renderChart = () => {
        const state = store.getState();
        const { thuNhap, chiTieu } = state;
        const ammountThuNhap = thuNhap.totalMoneyBaseOnTimeRange;
        const ammountChiTieu = chiTieu.totalMoneyBaseOnTimeRange;
        const data = [{
            key: 1,
            amount: ammountThuNhap,
            svg: { fill: '#a6f5c8' },
        },
        {
            key: 2,
            amount: ammountChiTieu,
            svg: { fill: '#ede1bb' }
        }];
        return (
            <View style={{

            }}>
                <PieChartComponent
                    data={data} />
            </View>);
    }

    return (
        <View style={styles.container}>
            {renderChart()}
            {renderTitle()}
            {renderContent()}
        </View>
    );
};

export default Detail;
