import { createSlice } from '@reduxjs/toolkit';
import { compareTime } from '../common/dateTimeHelper';
import { getItem, setItem } from '../common/localStoreHelper';
import { buildTotalMoneyPerDay, totalMoneyPerDayFormatted, buildTotalMoneyBaseOnTimeRange } from '../common/commonHelper';
import { commaFormatted } from '../common/numberFormater';

const chiTieuSlice = createSlice({
    name: 'chitieu',
    initialState: {
        totalMoneyBaseOnTimeRange: 0,
        loading: false,
        chiTieuArray: []
    },
    reducers: {

    },
    extraReducers: {
        [getItem.pending]: state => {
            state.loading = true;
        },
        [getItem.fulfilled]: (state, action) => {
            state.loading = false;
            action.payload.sort((src, dest) => {
                const dateTimeSource = Date.parse(src.title);
                const dateTimeDest = Date.parse(dest.title);
                return compareTime(dateTimeSource, dateTimeDest);
            });
            buildTotalMoneyPerDay(action.payload);
            totalMoneyPerDayFormatted(action.payload);
            state.chiTieuArray = [...[], ...action.payload];
            state.totalMoneyBaseOnTimeRange = buildTotalMoneyBaseOnTimeRange(action.payload);
            state.totalMoneyBaseOnTimeRangeDisplay = `${commaFormatted(state.totalMoneyBaseOnTimeRange)} đ`;
            console.log('[totalMoneyBaseOnTimeRange]: '+ JSON.stringify(state.totalMoneyBaseOnTimeRangeDisplay))
        },
        [getItem.rejected]: state => {
            state.loading = false;
        },
        [setItem.pending]: state => {
            state.loading = true;
        },
        [setItem.fulfilled]: (state, action) => {
            state.loading = false;
            action.payload.sort((src, dest) => {
                const dateTimeSource = Date.parse(src.title);
                const dateTimeDest = Date.parse(dest.title);
                return compareTime(dateTimeSource, dateTimeDest);
            });
            buildTotalMoneyPerDay(action.payload);
            totalMoneyPerDayFormatted(action.payload);
            state.chiTieuArray = [...[], ...action.payload];
            state.totalMoneyBaseOnTimeRange = buildTotalMoneyBaseOnTimeRange(action.payload);
            state.totalMoneyBaseOnTimeRangeDisplay = `${commaFormatted(state.totalMoneyBaseOnTimeRange)} đ`;
            console.log('[totalMoneyBaseOnTimeRange]: '+ JSON.stringify(state.totalMoneyBaseOnTimeRangeDisplay))
        },
        [setItem.rejected]: state => {
            state.loading = false;
        }
    }
});


const { actions, reducer } = chiTieuSlice;
const { } = actions;

export default reducer;