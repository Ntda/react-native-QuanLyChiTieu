import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { isEqual } from 'lodash';

const getItem = createAsyncThunk(
    'get/item',
    async key => {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue
            ? JSON.parse(jsonValue)
            : null
    }
);

const setItem = createAsyncThunk(
    'set/item',
    async (model, { getState }) => {
        const { key, value } = model;
        const state = getState();
        let { chiTieuArray } = state.chiTieu;
        const chiTieuModel = chiTieuArray.find(c => isEqual(c.title, value.title));
        console.log('[setItem]: ' + JSON.stringify(chiTieuArray))
        console.log('[setItem]: ' + JSON.stringify(value))
        if (chiTieuModel) {
            chiTieuArray.data.push(value);
        } else {
            chiTieuArray = [...chiTieuArray, ...[value]];
        }
        console.log('[setItem]: ' + JSON.stringify(chiTieuArray))
        const jsonValue = JSON.stringify(chiTieuArray)
        
        await AsyncStorage.setItem(key, jsonValue);
        //await AsyncStorage.clear();
        return chiTieuArray;
    }
);

export {
    getItem,
    setItem
}