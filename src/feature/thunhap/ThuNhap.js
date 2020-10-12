import React, { useEffect } from 'react';
import { LOCALSTOREKEY, ICONTYPE, NAVIGATIONTITLE, STACKNAVIGATIONROUTE, THEMTHUNHAPTITLE } from '../common/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { getItemThuNhap } from '../common/localStoreHelper';
import ListViewComponent from '../common/ListViewComponent';

const ThuNhap = ({ navigation }) => {
    const dispatch = useDispatch();
    const filterModel = useSelector(state => state.filter);
    const { fromDate, toDate, isShowToday } = filterModel.thuNhap;
    const modelThuNhap = useSelector(state => state.thuNhap);

    console.log('[Thu nhap]: ' + JSON.stringify(modelThuNhap));

    useEffect(() => {
        const model = {
            localStoreKey: LOCALSTOREKEY.THUNHAP,
            fromDate,
            toDate,
            isShowToday
        }
        dispatch(getItemThuNhap(model))
    }, [fromDate, toDate, isShowToday]);

    useEffect(() => {
        navigation.setOptions({
            title: NAVIGATIONTITLE.thuNhap,
            tabBarBadge: modelThuNhap.totalMoneyBaseOnTimeRangeDisplay
        });
    }, [modelThuNhap.totalMoneyBaseOnTimeRangeDisplay]);

    return (
        <ListViewComponent
            navigation={navigation}
            filterModel={filterModel}
            fromDate={fromDate}
            toDate={toDate}
            isShowToday={isShowToday}
            route={STACKNAVIGATIONROUTE.themThuNhap}
            model={modelThuNhap}
            titleHeader={THEMTHUNHAPTITLE} />
    )
}

export default ThuNhap;