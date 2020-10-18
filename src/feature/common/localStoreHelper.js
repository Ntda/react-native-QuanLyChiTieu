import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { isEqual } from 'lodash';
import { executeFilter } from './commonHelper';

const getItemChiTieu = createAsyncThunk(
    'get/itemChiTieu',
    async model => {
        const result = await getItemFromLocalStorage(model);
        return result;
    }
);

const setItemChiTieu = createAsyncThunk(
    'set/itemChiTieu',
    async (model, { getState }) => {
        const filterModel = getState().filter;
        const filterModelChiTieu = filterModel.chiTieu;
        const result = await setItemToLocalStore(model, filterModelChiTieu);
        return result;
    }
);

const getItemThuNhap = createAsyncThunk(
    'get/itemThuNhap',
    async model => {
        const result = await getItemFromLocalStorage(model);
        return result;
    }
);

const setItemThuNhap = createAsyncThunk(
    'set/itemThuNhap',
    async (model, { getState }) => {
        const filterModel = getState().filter;
        const filterModelThuNhap = filterModel.thuNhap;
        const result = await setItemToLocalStore(model, filterModelThuNhap);
        return result;
    }
);

const getItemFromLocalStorage = async model => {
    const {
        localStoreKey,
        ...rest } = model;
    const jsonValue = await AsyncStorage.getItem(localStoreKey);
    const jsonToArray = jsonValue
        ? JSON.parse(jsonValue)
        : [];
    return executeFilter(jsonToArray, rest);
}

const setItemToLocalStore = async (model, filter) => {
    const { key, value } = model;
    const jsonValue = await AsyncStorage.getItem(key);
    let newArray = jsonValue
        ? JSON.parse(jsonValue)
        : [];
    const result = newArray.find(c => isEqual(c.title, value.title));
    result
        ? result.data.push(value.data[0])
        : newArray.push(value)

    await AsyncStorage.setItem(key, JSON.stringify(newArray), e => {
        console.log('[setItemToLocalStore->Error: ]' + JSON.stringify(e));
    });
    return executeFilter(newArray, filter);
}

const getDataByDate = async model => {
    const { localStoreKey, date } = model;
    const jsonValue = await AsyncStorage.getItem(localStoreKey);
    let newArray = jsonValue
        ? JSON.parse(jsonValue)
        : [];
    const result = newArray.find(f => isEqual(date, f.title));
    return result
        ? result
        : { data: [] }
}
export {
    getItemChiTieu,
    setItemChiTieu,
    getItemThuNhap,
    setItemThuNhap,
    getDataByDate
}