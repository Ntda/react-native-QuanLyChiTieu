import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

const getItem = createAsyncThunk(
    'get/item',
    async key => {
        const jsonValue = await AsyncStorage.getItem(key);
        console.log('[getItem]: ' + jsonValue);
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
        console.log('[set item]: ' + model);
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue);
        return true;
    }
);

export {
    getItem,
    setItem
}