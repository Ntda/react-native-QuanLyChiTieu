import { createSlice } from '@reduxjs/toolkit';
import { compareTime } from '../common/dateTimeHelper';
import { getItemThuNhap, setItemThuNhap, deleteItemThuNhap } from '../common/localStoreHelper';
import {
    buildTotalMoneyPerDay,
    totalMoneyPerDayFormatted,
    buildTotalMoneyBaseOnTimeRange
} from '../common/commonHelper';
import { commaFormatted } from '../common/numberFormater';

const thuNhapSlice = createSlice({
    name: 'thunhap',
    initialState: {
        totalMoneyBaseOnTimeRange: 0,
        loading: false,
        entities: []
    },
    reducers: {

    },
    extraReducers: {
        [getItemThuNhap.pending]: state => {
            state.loading = true;
        },
        [getItemThuNhap.fulfilled]: (state, action) => {
            state.loading = false;
            action.payload.sort((src, dest) => {
                const dateTimeSource = Date.parse(src.title);
                const dateTimeDest = Date.parse(dest.title);
                return compareTime(dateTimeSource, dateTimeDest);
            });
            buildTotalMoneyPerDay(action.payload);
            totalMoneyPerDayFormatted(action.payload);
            state.entities = [...[], ...action.payload];
            state.totalMoneyBaseOnTimeRange = buildTotalMoneyBaseOnTimeRange(action.payload);
            state.totalMoneyBaseOnTimeRangeDisplay = `${commaFormatted(state.totalMoneyBaseOnTimeRange)} đ`;
            console.log('[totalMoneyBaseOnTimeRange]: '+ JSON.stringify(state.totalMoneyBaseOnTimeRangeDisplay))
        },
        [getItemThuNhap.rejected]: state => {
            state.loading = false;
        },
        [setItemThuNhap.pending]: state => {
            state.loading = true;
        },
        [setItemThuNhap.fulfilled]: (state, action) => {
            state.loading = false;
            action.payload.sort((src, dest) => {
                const dateTimeSource = Date.parse(src.title);
                const dateTimeDest = Date.parse(dest.title);
                return compareTime(dateTimeSource, dateTimeDest);
            }); 
            buildTotalMoneyPerDay(action.payload);
            totalMoneyPerDayFormatted(action.payload);
            state.entities = [...[], ...action.payload];
            state.totalMoneyBaseOnTimeRange = buildTotalMoneyBaseOnTimeRange(action.payload);
            state.totalMoneyBaseOnTimeRangeDisplay = `${commaFormatted(state.totalMoneyBaseOnTimeRange)} đ`;
            console.log('[totalMoneyBaseOnTimeRange]: '+ JSON.stringify(state.totalMoneyBaseOnTimeRangeDisplay))
        },
        [setItemThuNhap.rejected]: state => {
            state.loading = false;
        },
        [deleteItemThuNhap.pending]: state => {
            state.loading = true;
        },
        [deleteItemThuNhap.fulfilled]: (state, action) => {
            state.loading = false;
            action.payload.sort((src, dest) => {
                const dateTimeSource = Date.parse(src.title);
                const dateTimeDest = Date.parse(dest.title);
                return compareTime(dateTimeSource, dateTimeDest);
            });
            buildTotalMoneyPerDay(action.payload);
            totalMoneyPerDayFormatted(action.payload);
            state.entities = [...[], ...action.payload];
            state.totalMoneyBaseOnTimeRange = buildTotalMoneyBaseOnTimeRange(action.payload);
            state.totalMoneyBaseOnTimeRangeDisplay = `${commaFormatted(state.totalMoneyBaseOnTimeRange)} đ`;
        },
        [deleteItemThuNhap.rejected]: state => {
            state.loading = false;
        }
    }
});


const { actions, reducer } = thuNhapSlice;
const { } = actions;

export default reducer;