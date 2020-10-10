import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { isEqual } from 'lodash';
import { executeFilter } from './commonHelper';

const getItem = createAsyncThunk(
    'get/item',
    async (key, { getState }) => {
        const filterModel = getState().filter;
        const jsonValue = await AsyncStorage.getItem(key);
        const chiTieuArray = jsonValue
            ? JSON.parse(jsonValue)
            : [];
        return executeFilter(chiTieuArray, filterModel);
    }
);

const setItem = createAsyncThunk(
    'set/item',
    async (model, { getState }) => {
        const { key, value } = model;
        const filterModel = getState().filter;
        const jsonValue = await AsyncStorage.getItem(key);
        let newChiTieuArray = jsonValue
            ? JSON.parse(jsonValue)
            : [];
        const chiTieuModel = newChiTieuArray.find(c => isEqual(c.title, value.title));
        chiTieuModel
            ? chiTieuModel.data.push(value.data[0])
            : newChiTieuArray.push(value)

        await AsyncStorage.setItem(key, JSON.stringify(newChiTieuArray), e => {
            console.log('[setItem->Error: ]' + JSON.stringify(e));
        });
        return executeFilter(newChiTieuArray, filterModel);
    }
);

export {
    getItem,
    setItem
}