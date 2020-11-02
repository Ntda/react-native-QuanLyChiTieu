import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { getFirstDayOfMonth } from '../common/commonHelper';


const firstDayOfMonth = getFirstDayOfMonth();
const filterModel = {
    fromDate: moment(firstDayOfMonth).format('LL'),
    toDate: moment(new Date()).format('LL'),
    isShowToday: true
};

const filterSlice = createSlice({
    name: 'filter/filter',
    initialState: {
        thuNhap: {
            ...filterModel
        },
        chiTieu: {
            ...filterModel
        }
    },
    reducers: {
        setFilterChiTieu: (state, action) => {
            const { timeRange, isShowToday } = action.payload;
            const { fromDate, toDate } = timeRange;
            console.log('[setFilterChiTieu]: ' + JSON.stringify(fromDate))
            state.chiTieu.fromDate = fromDate;
            state.chiTieu.toDate = toDate;
            state.chiTieu.isShowToday = isShowToday
        },
        setFilterThuNhap: (state, action) => {
            const { timeRange, isShowToday } = action.payload;
            const { fromDate, toDate } = timeRange;
            console.log('[setFilterThuNhap]: ' + JSON.stringify(fromDate))
            state.thuNhap.fromDate = fromDate;
            state.thuNhap.toDate = toDate;
            state.thuNhap.isShowToday = isShowToday
        }
    }
})
const { actions, reducer } = filterSlice;
const {
    setFilterChiTieu,
    setFilterThuNhap
} = actions;
export {
    setFilterChiTieu,
    setFilterThuNhap
}
export default reducer;