import React, { useEffect } from 'react';
import { LOCALSTOREKEY, ICONTYPE, NAVIGATIONTITLE, STACKNAVIGATIONROUTE, THEMCHITIEUTITLE } from '../common/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { getItemChiTieu } from '../common/localStoreHelper';
import ListViewComponent from '../common/ListViewComponent';

const ChiTieu = ({ navigation }) => {
    const dispatch = useDispatch();
    const filterChiTieuModel = useSelector(state => state.filter.chiTieu);
    const { fromDate, toDate, isShowToday } = filterChiTieuModel;
    const modelChiTieu = useSelector(state => state.chiTieu);

    //console.log('[Chi tieu]: ' + JSON.stringify(modelChiTieu));
  

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
            filterModel={filterChiTieuModel}
            route={STACKNAVIGATIONROUTE.themChiTieu}
            model={modelChiTieu}
            tabType={NAVIGATIONTITLE.chiTieu}
            titleHeader={THEMCHITIEUTITLE}
            filterRoute={STACKNAVIGATIONROUTE.filterChiTieu}/>
    )
}

export default ChiTieu;