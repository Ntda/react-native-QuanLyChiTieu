import chieuTieuReducer from '../feature/chitieu/chiTieuSlice';
import filterReducer from '../feature/filter/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        chiTieu: chieuTieuReducer,
        filter: filterReducer
    }
});

export default store;