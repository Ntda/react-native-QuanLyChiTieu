import { createSlice } from '@reduxjs/toolkit';
import { compareTime } from '../common/dateTimeHelper';
import { getItem, setItem } from '../common/localStoreHelper';
import { totalMoney, buildTotalMoney } from '../common/commonHelper';

const chiTieuSlice = createSlice({
    name: 'chitieu',
    initialState: {
        loading: true,
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
            buildTotalMoney(action.payload);
            state.chiTieuArray = [...[], ...action.payload];

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
            buildTotalMoney(action.payload);
            state.chiTieuArray = action.payload;
        },
        [setItem.rejected]: state => {
            state.loading = false;
        }
    }
});


const { actions, reducer } = chiTieuSlice;
const { } = actions;

export default reducer;