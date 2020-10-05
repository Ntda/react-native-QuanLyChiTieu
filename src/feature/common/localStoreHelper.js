import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { isEqual } from 'lodash';
import { cloneDeep } from 'lodash';

const getItem = createAsyncThunk(
    'get/item',
    async key => {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue
            ? JSON.parse(jsonValue)
            : []
    }
);

const setItem = createAsyncThunk(
    'set/item',
    async (model, { getState }) => {
        const { key, value } = model;
        const state = getState();
        const { chiTieuArray } = state.chiTieu;
        let newChiTieuArray = cloneDeep(chiTieuArray);
        const chiTieuModel = newChiTieuArray.find(c => isEqual(c.title, value.title));
        if (chiTieuModel) {
            chiTieuModel.data.push(value.data[0]);
        } else {
            newChiTieuArray.push(value);
        }
        const jsonValue = JSON.stringify(newChiTieuArray)
        await AsyncStorage.setItem(key, jsonValue, e => {
            console.log('[setItem->Error: ]' + JSON.stringify(e));
        });
        console.log('[setItem]:=> DONE ');
        return newChiTieuArray;
    }
);

export {
    getItem,
    setItem
}