import chieuTieuReducer from '../feature/chitieu/chiTieuSlice';
import thuNhapReducer from '../feature/thunhap/thuNhapSlice';
import filterReducer from '../feature/filter/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        thuNhap: thuNhapReducer,
        chiTieu: chieuTieuReducer,
        filter: filterReducer
    }
});

export default store;