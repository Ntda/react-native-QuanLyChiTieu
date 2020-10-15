import React, { useEffect } from 'react';
import { LOCALSTOREKEY, ICONTYPE, NAVIGATIONTITLE, STACKNAVIGATIONROUTE, THEMTHUNHAPTITLE } from '../common/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { getItemThuNhap } from '../common/localStoreHelper';
import ListViewComponent from '../common/ListViewComponent';

const ThuNhap = ({ navigation }) => {
    const dispatch = useDispatch();
    const filterThuNhapModel = useSelector(state => state.filter.thuNhap);
    const { fromDate, toDate, isShowToday } = filterThuNhapModel;
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
            filterModel={filterThuNhapModel}
            route={STACKNAVIGATIONROUTE.themThuNhap}
            model={modelThuNhap}
            tabType={NAVIGATIONTITLE.thuNhap}
            titleHeader={THEMTHUNHAPTITLE}
            filterRoute={STACKNAVIGATIONROUTE.filterThuNhap}
            viewDetail={STACKNAVIGATIONROUTE.viewDetailThuNhap}
        />
    )
}

export default ThuNhap;