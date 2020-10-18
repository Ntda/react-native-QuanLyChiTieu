import React, { useEffect, useState } from 'react';
import DetailPerDay from '../detail/DetailPerDay';
import { buildDataPieChart, buildTotalMoneyPerDay, totalMoneyPerDayFormatted } from '../common/commonHelper';
import { useStore } from 'react-redux';
import { getDataByDate } from '../common/localStoreHelper';
import { LOCALSTOREKEY, STACKNAVIGATIONROUTE } from '../common/Constant';
import {
    Text
} from 'react-native';
import { commaFormatted } from '../common/numberFormater';

const ChiTieuDetailPerDay = props => {
    const [thuNhap, setThuNhap] = useState(null);
    const {
        navigation,
        route
    } = props;
    const {
        title,
        totalMoney,
        totalMoneyDisplay,
        data
    } = route.params;

    useEffect(() => {
        (async () => {
            const modelFilter = {
                localStoreKey: LOCALSTOREKEY.THUNHAP,
                date: title
            };
            const thuNhapPerDay = await getDataByDate(modelFilter);
            //console.log('[thuNhapPerDay]: ' + JSON.stringify(thuNhapPerDay))
            buildTotalMoneyPerDay([thuNhapPerDay]);
            totalMoneyPerDayFormatted([thuNhapPerDay]);
            setThuNhap(thuNhapPerDay);
        })()
    }, [title]);

    if (!thuNhap) {
        return (
            <Text>Loading...</Text>
        )
    }
    //console.log('[thuNhap]: ' + JSON.stringify(thuNhap));
    console.log('[chiTieu]: ' + JSON.stringify(route.params))
    const dataPieChart = buildDataPieChart(thuNhap.totalMoney, totalMoney);
    const dataListView = data.map(item => {
        return ({
            ...item,
            money: `- ${item.money}`
        })
    })
    return (
        <DetailPerDay
            route={route}
            navigation={navigation}
            dataPieChart={dataPieChart}
            ammount={{
                value: `- ${totalMoneyDisplay}`,
                color: 'red'
            }}
            title={title}
            dataListView={dataListView}
            routeViewDetail={STACKNAVIGATIONROUTE.viewDetailChiTieu}
        />
    );
};


export default ChiTieuDetailPerDay;