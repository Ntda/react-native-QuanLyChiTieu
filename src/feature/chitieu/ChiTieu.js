import React, { useEffect } from 'react';
import { LOCALSTOREKEY, ICONTYPE, NAVIGATIONTITLE, STACKNAVIGATIONROUTE, THEMCHITIEUTITLE } from '../common/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { getItemChiTieu } from '../common/localStoreHelper';
import ListViewComponent from '../common/ListViewComponent';

const ChiTieu = ({ navigation }) => {
    const dispatch = useDispatch();
    const filterModel = useSelector(state => state.filter);
    const { fromDate, toDate, isShowToday } = filterModel.chiTieu;
    const modelChiTieu = useSelector(state => state.chiTieu);

    console.log('[Chi tieu]: ' + JSON.stringify(modelChiTieu));

    useEffect(() => {
        const model={
            localStoreKey: LOCALSTOREKEY.CHITIEU,
            fromDate,
            toDate,
            isShowToday
        }
        dispatch(getItemChiTieu(model))
    }, [fromDate, toDate, isShowToday]);

    useEffect(() => {
        navigation.setOptions({
            title: NAVIGATIONTITLE.chiTieu,
            tabBarBadge: modelChiTieu.totalMoneyBaseOnTimeRangeDisplay
        });
    }, [modelChiTieu.totalMoneyBaseOnTimeRangeDisplay]);

    return (
        <ListViewComponent
            navigation={navigation}
            filterModel={filterModel}
            fromDate={fromDate}
            toDate={toDate}
            isShowToday={isShowToday}
            route={STACKNAVIGATIONROUTE.themChiTieu}
            model={modelChiTieu}
            titleHeader={THEMCHITIEUTITLE}/>
    )
}

export default ChiTieu;