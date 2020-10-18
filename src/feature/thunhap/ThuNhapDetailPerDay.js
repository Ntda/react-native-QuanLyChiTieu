import React, { useEffect, useState } from 'react';
import DetailPerDay from '../detail/DetailPerDay';
import { buildDataPieChart, buildTotalMoneyPerDay, totalMoneyPerDayFormatted } from '../common/commonHelper';
import { getDataByDate } from '../common/localStoreHelper';
import { LOCALSTOREKEY, STACKNAVIGATIONROUTE } from '../common/Constant';
import {
    Text,
    View
} from 'react-native';

const ThuNhapDetailPerDay = props => {
    const [chiTieu, setChiTieu] = useState(null);
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
                localStoreKey: LOCALSTOREKEY.CHITIEU,
                date: title
            };
            const chiTieuPerDay = await getDataByDate(modelFilter);
            //console.log('[chiTieuPerDay]: ' + JSON.stringify(chiTieuPerDay))
            buildTotalMoneyPerDay([chiTieuPerDay]);
            totalMoneyPerDayFormatted([chiTieuPerDay]);
            setChiTieu(chiTieuPerDay);
        })()
    }, [title]);

    if (!chiTieu) {
        return (
            <Text>Loading...</Text>
        )
    }
    //console.log('[thuNhap]: ' + JSON.stringify(thuNhap));
    console.log('[thuNhap]: ' + JSON.stringify(route.params))
    const dataPieChart = buildDataPieChart(totalMoney, chiTieu.totalMoney);
    const dataListView = data.map(item => {
        return ({
            ...item,
            money: `+ ${item.money}`
        })
    })
    return (
        <DetailPerDay
            route={route}
            colorMoney='green'
            prefixMoney='+'
            navigation={navigation}
            dataPieChart={dataPieChart}
            ammount={{
                value: `+ ${totalMoneyDisplay}`,
                color: 'green'
            }}
            title={title}
            dataListView={dataListView}
            routeViewDetail={STACKNAVIGATIONROUTE.viewDetailThuNhap}
        >
            <View style={{
                margin: 10,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 25,
                    color: 'gray'
                }}>Thu nhập</Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>{totalMoneyDisplay}</Text>
            </View>
        </DetailPerDay>
    );
};


export default ThuNhapDetailPerDay;