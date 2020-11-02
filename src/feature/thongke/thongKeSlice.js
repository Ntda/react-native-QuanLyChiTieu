import { createSlice } from '@reduxjs/toolkit';
import { buildVerticalCalendarOfCurrentYear, buildTotalMoneyPerDay, calculateAmountPerMonth } from '../common/commonHelper';
import { getDataThongKeByMonthAndYear } from '../common/localStoreHelper';

const thongKeSlice = createSlice({
    name: 'thongKe/thongKe',
    initialState: {
        selectedMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        monthDataSource: buildVerticalCalendarOfCurrentYear(),
        loading: false,
        chartInfo: {}
    },
    reducers: {
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload;
        }
    },
    extraReducers: {
        [getDataThongKeByMonthAndYear.pending]: (state, action) => {
            state.loading = true;
        },
        [getDataThongKeByMonthAndYear.fulfilled]: (state, action) => {
            state.loading = false;
            const { thuNhap, chiTieu } = action.payload;
            buildTotalMoneyPerDay(thuNhap);
            buildTotalMoneyPerDay(chiTieu);
            const chartInfo = calculateAmountPerMonth(thuNhap, chiTieu);
            state.chartInfo = chartInfo;
        },
        [getDataThongKeByMonthAndYear.rejected]: (state, action) => {
            state.loading = false;
        }
    }
});

const { actions, reducer } = thongKeSlice;
const { setSelectedMonth } = actions;

export { setSelectedMonth };
export default reducer;