import chieuTieuReducer from '../feature/chitieu/chiTieuSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        chiTieu: chieuTieuReducer
    }
});

export default store;