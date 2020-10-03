import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../common/localStoreHelper';

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
            console.log('[setItem.fulfilled]: '+ JSON.stringify(action.payload))
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