import React from 'react';
import PropTypes from 'prop-types';
import TimeRange from '../common/TimeRange';
import { setFilterChiTieu } from '../filter/filterSlice';
import { useDispatch } from 'react-redux';
import { ROUTECHITIEU } from '../common/Constant';

const FilterChiTieu = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const handleSetFilter = filterModel => {
        dispatch(setFilterChiTieu(filterModel));
        navigation.navigate(ROUTECHITIEU);
    }
    return (
        <TimeRange
            route={route}
            navigation={navigation}
            onSetFilter={handleSetFilter}
            checkboxTitle='Chi tiêu hôm nay'
        />
    );
};

export default FilterChiTieu;