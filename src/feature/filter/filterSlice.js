import React from 'react';
import PropTypes from 'prop-types';
import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const filterSlice = createSlice({
    name: 'filter/filter',
    initialState: {
        fromDate: moment(new Date()).format('LL'),
        toDate: moment(new Date()).format('LL'),
        isShowToday: true
    },
    reducers: {
        setFilter: (state, action) => {
            const { timeRange, isShowToday } = action.payload;
            const { fromDate, toDate } = timeRange;
            console.log('[setFilter]: ' + JSON.stringify(fromDate))
            state.fromDate = fromDate;
            state.toDate = toDate;
            state.isShowToday = isShowToday
        }
    }
})
const { actions, reducer } = filterSlice;
const { setFilter } = actions;
export {
    setFilter
}
export default reducer;