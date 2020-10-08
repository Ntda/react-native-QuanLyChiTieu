import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { isEqual } from 'lodash';
import { cloneDeep } from 'lodash';
import moment from 'moment';

const getItem = createAsyncThunk(
    'get/item',
    async (key, { getState }) => {
        const filterModel = getState().filter;
        const { fromDate, toDate, isShowToday } = filterModel;
        const today = moment(new Date()).format('LL');
        console.log('[getItem]: ' + JSON.stringify(filterModel));
        console.log('[getItem]: ' + JSON.stringify(today));
        const jsonValue = await AsyncStorage.getItem(key);
        const chiTieuArray = jsonValue
            ? JSON.parse(jsonValue)
            : [];
        if (isShowToday) {
            return chiTieuArray.filter(c => isEqual(c.title, today));
        }
        return chiTieuArray;
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
        const today = moment(new Date()).format('LL');
        const { fromDate, toDate, isShowToday } = filterModel.isShowToday;
        if (isShowToday) {
            return newChiTieuArray.filter(f => isEqual(f.title, today));
        }
        return newChiTieuArray.filter(f => (new Date(filterModel.fromDate)) >= fromDate && (new Date(filterModel.toDate)) <= toDate);
    }
);

export {
    getItem,
    setItem
}