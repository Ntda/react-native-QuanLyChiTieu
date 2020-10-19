import { createSlice } from '@reduxjs/toolkit';
import { compareTime } from '../common/dateTimeHelper';
import {
    getItemChiTieu,
    setItemChiTieu,
    deleteItemChiTieu
} from '../common/localStoreHelper';
import { buildTotalMoneyPerDay, totalMoneyPerDayFormatted, buildTotalMoneyBaseOnTimeRange } from '../common/commonHelper';
import { commaFormatted } from '../common/numberFormater';

const chiTieuSlice = createSlice({
    name: 'chitieu',
    initialState: {
        totalMoneyBaseOnTimeRange: 0,
        loading: false,
        entities: []
    },
    reducers: {

    },
    extraReducers: {
        [getItemChiTieu.pending]: state => {
            state.loading = true;
        },
        [getItemChiTieu.fulfilled]: (state, action) => {
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
            console.log('[totalMoneyBaseOnTimeRange]: ' + JSON.stringify(state.totalMoneyBaseOnTimeRangeDisplay))
        },
        [getItemChiTieu.rejected]: state => {
            state.loading = false;
        },
        [setItemChiTieu.pending]: state => {
            state.loading = true;
        },
        [setItemChiTieu.fulfilled]: (state, action) => {
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
            console.log('[totalMoneyBaseOnTimeRange]: ' + JSON.stringify(state.totalMoneyBaseOnTimeRangeDisplay))
        },
        [setItemChiTieu.rejected]: state => {
            state.loading = false;
        },
        [deleteItemChiTieu.pending]: state => {
            state.loading = true;
        },
        [deleteItemChiTieu.fulfilled]: (state, action) => {
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
        [deleteItemChiTieu.rejected]: state => {
            state.loading = false;
        }
    }
});


const { actions, reducer } = chiTieuSlice;
const { } = actions;

export default reducer;