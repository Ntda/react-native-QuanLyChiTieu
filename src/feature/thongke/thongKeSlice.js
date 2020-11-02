import { createSlice } from '@reduxjs/toolkit';
import { buildVerticalCalendarOfCurrentYear } from '../common/commonHelper';

const thongKeSlice = createSlice({
    name: 'thongKe/thongKe',
    initialState: {
        selectedMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        monthDataSource: buildVerticalCalendarOfCurrentYear()
    },
    reducers: {
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload;
        }
    }
});

const { actions, reducer } = thongKeSlice;
const { setSelectedMonth } = actions;

export { setSelectedMonth };
export default reducer;