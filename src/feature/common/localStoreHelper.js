import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { isEqual } from 'lodash';
import { cloneDeep } from 'lodash';
import { convertTime12to24, compareTime } from './dateTimeHelper';

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
        console.log('[setItem]chiTieuArray: ' + JSON.stringify(newChiTieuArray))
        console.log('[setItem]:value ' + JSON.stringify(value))
        if (chiTieuModel) {
            console.log('[setItem]:chiTieuModel=>data: ' + JSON.stringify(chiTieuModel))
            chiTieuModel.data.push(value.data[0]);
            chiTieuModel.data.sort((src, dest) => {
                console.log(src.time);
                const srcFormat24h = convertTime12to24(src.time);
                const destFormat24h = convertTime12to24(dest.time);
                console.log('[srcFormat24h]: ' + JSON.stringify(srcFormat24h));
                console.log('[destFormat24h]: ' + JSON.stringify(destFormat24h));
                const result = compareTime(srcFormat24h, destFormat24h);
                console.log('[result]: '+ result); 
                return result;
            });
            console.log('[setItem]:chiTieuModel=>data=>push: ' + JSON.stringify(chiTieuModel))
        } else {
            newChiTieuArray = [...chiTieuArray, ...[value]];
        }
        const jsonValue = JSON.stringify(newChiTieuArray)
        console.log('[setItem]write to local store: ' + jsonValue + ' ' + key);
        await AsyncStorage.setItem(key, jsonValue, e => {
            console.log('[setItem->Error: ]' + JSON.stringify(e));
        });
        console.log('[setItem]:=> DONE ');
        //await AsyncStorage.clear();
        return newChiTieuArray;
    }
);

export {
    getItem,
    setItem
}