import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../common/localStoreHelper';

const chiTieuSlice = createSlice({
    name: 'chitieu',
    initialState: {
        loading: true,
        chiTieuArray: undefined
    },
    reducers: {

    },
    extraReducers: {
        [getItem.pending]: state => {
            state.loading = true;
        },
        [getItem.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
        },
        [getItem.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.error);
        },
        [setItem.pending]: state => {
            state.loading = true;
        },
        [setItem.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
        },
        [setItem.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.error);
        }
    }
});

const { actions, reducer } = chiTieuSlice;
const {} = actions;

export default reducer;