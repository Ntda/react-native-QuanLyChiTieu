import React from 'react';
import TimeRange from '../common/TimeRange';
import { setFilterThuNhap } from '../filter/filterSlice';
import { useDispatch } from 'react-redux';
import { ROUTETHUNHAP } from '../common/Constant';

const FilterThuNhap = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const handleSetFilter = filterModel => {
        dispatch(setFilterThuNhap(filterModel));
        navigation.navigate(ROUTETHUNHAP);
    }
    return (
        <TimeRange
            route={route}
            navigation={navigation}
            onSetFilter={handleSetFilter}
            checkboxTitle='Thu nhập hôm nay'
        />
    );
};

export default FilterThuNhap;