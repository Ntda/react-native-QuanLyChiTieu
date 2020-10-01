import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

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
        const modelWriter = [...[], ...[value]];
        const jsonValue = JSON.stringify(modelWriter)
        //console.log('[modelWriter]: ' + JSON.stringify(jsonValue));
        await AsyncStorage.setItem(key, jsonValue);
        //value.date = value.date.toString();
        //return value;
    }
);

export {
    getItem,
    setItem
}