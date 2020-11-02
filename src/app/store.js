import chieuTieuReducer from '../feature/chitieu/chiTieuSlice';
import thuNhapReducer from '../feature/thunhap/thuNhapSlice';
import filterReducer from '../feature/filter/filterSlice';
import deleteManyReducer from '../feature/delete/deleteSlice';
import thongKeReducer from '../feature/thongke/thongKeSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        thuNhap: thuNhapReducer,
        chiTieu: chieuTieuReducer,
        filter: filterReducer,
        deleteMany: deleteManyReducer,
        thongKe: thongKeReducer
    }
});

export default store;